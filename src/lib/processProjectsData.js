const BACKENDURL = "https://infinitaproducoes.com/wordpress/wp-json/wp/v2";

export const getProjectsDataJson = async function () {
    const response = await fetch(`${BACKENDURL}/pages?slug=projects`);
    const jsonData = await response.json();
    return jsonData[0]?.projects;
}

export const processCategories = function (projects) {
    const categoriesSet = new Set();

    projects.forEach(obj => {
        const category = obj.categories[0].toLowerCase();
        if (category !== "uncategorised") {
            categoriesSet.add(category);
        }
    });

    return Array.from(categoriesSet).sort();
}