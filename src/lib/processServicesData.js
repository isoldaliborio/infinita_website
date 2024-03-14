
const BACKENDURLSERVICES = "https://infinitaproducoes.com/wordpress/wp-json/wp/v2";

export const getServicesPageDataJson = async function () {
    // Fetch data from the provided API endpoint
    const response = await fetch(`${BACKENDURLSERVICES}/pages?slug=service`);
    const jsonData = await response.json();
    const acfData = jsonData[0]?.acf
    return acfData;
}


