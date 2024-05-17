const BACKENDURL = "https://infinitaproductions.com/admin/wp-json/wp/v2";

export const getHomePageDataJson = async function () {
    const response = await fetch(`${BACKENDURL}/pages?slug=home-page`);
    const jsonData = await response.json();
    return jsonData[0]?.home_data;
}

export const orderImages = function (array) {
    const sortedArray = array.sort((a, b) => parseInt(a.order) - parseInt(b.order));
    return sortedArray;
}
