const BACKENDURL = "https://infinitaproducoes.com/wordpress/wp-json/wp/v2";

export const getHomePageDataJson = async function () {
    // Fetch data from the provided API endpoint
    const response = await fetch(`${BACKENDURL}/pages?slug=home-page`);
    const jsonData = await response.json();
    // Extract ACF field from the response
    return jsonData[0]?.acf;
}

export const orderImages = function (images) {
    return Object.keys(images)
        .filter(key => key.startsWith('order_'))
        .sort((a, b) => images[a] - images[b])
        .map(orderKey => {
            const imgIdKey = `featured_img_${orderKey.split('_')[1]}`;
            const workIdKey = `work_id_${orderKey.split('_')[1]}`;
            return {
                img_id: images[imgIdKey],
                work_id: images[workIdKey],

            };
        });
}

export const processHomePageData = async function (homePageImages) {
    try {

        // console.log(`home page images: ${JSON.stringify(homePageImages, null, 4)}`);

        // Loop through the list and fetch additional information
        for (const item of homePageImages) {
            // Fetch image URL
            const imgResponse = await fetch(`${BACKENDURL}/media/${item.img_id}`);
            const imgData = await imgResponse.json();
            item.img_url = imgData.media_details.sizes.full.source_url;

            // Fetch category names and title
            const postResponse = await fetch(`${BACKENDURL}/posts/${item.work_id}`);
            const postData = await postResponse.json();
            const categoryIds = postData.categories;
            const title = postData.title.rendered;

            // Fetch category names for each category ID
            const categoryNames = await Promise.all(categoryIds.map(async categoryId => {
                const categoryResponse = await fetch(`${BACKENDURL}/categories/${categoryId}`);
                const categoryData = await categoryResponse.json();
                return categoryData.name;
            }));

            item.category_names = categoryNames;
            item.title = title;
        }
        return homePageImages

    } catch (error) {
        console.error('Error processing data:', error);
    }
}
