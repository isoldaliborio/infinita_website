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