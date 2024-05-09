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
        console.error(`Invalid HTML string: ${htmlString}`);
        return [];
    }

    const srcsetArray = [];
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const galleryItems = doc.querySelectorAll('.gallery-item');

    if (galleryItems.length === 0) {
        console.error('No gallery items found');
        return [];
    }

    galleryItems.forEach(item => {
        const imgElement = item.querySelector('img');
        if (!imgElement) {
            console.error('No img element found in gallery item');
            return [];
        }

        const srcset = imgElement.getAttribute('srcset');
        if (!srcset) {
            console.error('No srcset attribute found in img element');
            return [];
        }

        const srcsetPairs = srcset.split(',').map(pair => {
            const parts = pair.trim().split(' ');
            if (parts.length !== 2) {
                console.error('Invalid srcset format');
                return [];
            }
            const [url, size] = parts;
            return { [size]: url };
        });

        srcsetArray.push(Object.assign({}, ...srcsetPairs));
    });

    return srcsetArray;
}

export const findClosestImageSize = function(item, desiredSize) {
    let sizes = new Set();

    Object.keys(item).forEach(key => {
        if (key.endsWith('w')) {
            // Remove the 'w' and convert to integer
            let size = parseInt(key.slice(0, -1));
            sizes.add(size);
        }
    });

    let sortedSizes = Array.from(sizes).sort((a, b) => a - b);

    // Find the closest size to the desired size
    let closestSize = sortedSizes.find(size => size >= desiredSize);
    if(!closestSize){
        closestSize = sortedSizes.find(size => size <= desiredSize);
    }

    return closestSize ? item[`${closestSize}w`] : undefined;
}