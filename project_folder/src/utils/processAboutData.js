
const BACKENDURLABOUT = "https://infinitaproducoes.com/wordpress/wp-json/wp/v2";

export const getAboutPageDataJson = async function () {
    // Fetch data from the provided API endpoint
    const response = await fetch(`${BACKENDURLABOUT}/pages?slug=about`);
    const jsonData = await response.json();
    const acfData = jsonData[0]?.acf
    acfData.image_id = jsonData[0]?.featured_media;
    return acfData;
}


export const getImageUrl = async function(image_id) {
    const response = await fetch(`${BACKENDURLABOUT}/media/${image_id}`);
    const jsonData = await response.json();
    return jsonData;
}

    
