
const BACKENDURLABOUT = "https://infinitaproducoes.com/wordpress/wp-json/wp/v2";

export const getServicesPageDataJson = async function () {
    // Fetch data from the provided API endpoint
    const response = await fetch(`${BACKENDURLABOUT}/pages?slug=service`);
    const jsonData = await response.json();
    console.log(jsonData);
    const acfData = jsonData[0]?.acf
    return acfData;
}

export const getImageUrl = async function(image_id) {
    const response = await fetch(`${BACKENDURLABOUT}/media/${image_id}`);
    const jsonData = await response.json();
    return jsonData;
}

