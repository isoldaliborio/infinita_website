const BACKENDURL = "https://infinitaproducoes.com/wordpress/wp-json/wp/v2";

export const getProjectsDataJson = async function (project = null) {
    let url = `${BACKENDURL}/pages?slug=projects`;

    if (project !== null) {
        url += `&project=${project}`;
    }

    const response = await fetch(url);
    const jsonData = await response.json();

    // Sort by year
    let projects = jsonData[0]?.projects;
    projects.sort((a, b) => b.year - a.year);

    return projects;
}


export const processCategories = function (projects) {
    const categoriesSet = new Set();

    projects.forEach(obj => {
        const category = obj.categories[0].toLowerCase();
        if (category !== "uncategorised") {
            categoriesSet.add(category);
        }
    });

    let sortedCategories = Array.from(categoriesSet).sort();
    sortedCategories.unshift("all");

    return sortedCategories;
}



export const parseImageGallery = function (data) {
    const htmlString = data[0].image_gallery

    if (!htmlString || typeof htmlString !== 'string') {
        throw new Error('Invalid HTML string');
    }

    const srcsetArray = [];
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const galleryItems = doc.querySelectorAll('.gallery-item');

    if (galleryItems.length === 0) {
        throw new Error('No gallery items found');
    }

    galleryItems.forEach(item => {
        const imgElement = item.querySelector('img');
        if (!imgElement) {
            throw new Error('No img element found in gallery item');
        }

        const srcset = imgElement.getAttribute('srcset');
        if (!srcset) {
            throw new Error('No srcset attribute found in img element');
        }

        const srcsetPairs = srcset.split(',').map(pair => {
            const parts = pair.trim().split(' ');
            if (parts.length !== 2) {
                throw new Error('Invalid srcset format');
            }
            const [url, size] = parts;
            return { [size]: url };
        });

        srcsetArray.push(Object.assign({}, ...srcsetPairs));
    });

    console.log(srcsetArray);

    return srcsetArray;
}