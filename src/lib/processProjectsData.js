const BACKENDURL = "https://infinitaproducoes.com/wordpress/wp-json/wp/v2";

export const getProjectsDataJson = async function () {
    const response = await fetch(`${BACKENDURL}/pages?slug=projects`);
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