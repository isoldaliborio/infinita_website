const mainUrl = "https://infinitaproductions.com";

async function processHomePageData() {
    try {
        // Fetch data from the provided API endpoint
        const response = await fetch(`${mainUrl}/admin/wp-json/wp/v2/pages?slug=home-page`);
        const jsonData = await response.json();

        // Extract ACF field from the response
        const acfField = jsonData[0]?.acf;

        if (acfField) {
            // Create an array of objects based on the order_X values
            const homePageImages = Object.keys(acfField)
                .filter(key => key.startsWith('order_'))
                .sort((a, b) => acfField[a] - acfField[b])
                .map(orderKey => {
                    const imgIdKey = `featured_img_${orderKey.split('_')[1]}`;
                    const workIdKey = `work_id_${orderKey.split('_')[1]}`;
                    return {
                        img_id: acfField[imgIdKey],
                        work_id: acfField[workIdKey]
                    };
                });

            // Loop through the list and fetch additional information
            for (const item of homePageImages) {
                // Fetch image URL
                const imgResponse = await fetch(`${mainUrl}/admin/wp-json/wp/v2/media/${item.img_id}`);
                const imgData = await imgResponse.json();
                item.img_url = imgData.media_details.sizes.full.source_url;

                // Fetch category names
                const postResponse = await fetch(`${mainUrl}/admin/wp-json/wp/v2/posts/${item.work_id}`);
                const postData = await postResponse.json();
                const categoryIds = postData.categories;

                // Fetch category names for each category ID
                const categoryNames = await Promise.all(categoryIds.map(async categoryId => {
                    const categoryResponse = await fetch(`${mainUrl}/admin/wp-json/wp/v2/categories/${categoryId}`);
                    const categoryData = await categoryResponse.json();
                    return categoryData.name;
                }));

                item.category_names = categoryNames;
            }

            // Log the final result
            console.log(homePageImages);
            return homePageImages
        } else {
            console.error('ACF field not found in the JSON data.');
        }
    } catch (error) {
        console.error('Error processing data:', error);
    }
}

export default processHomePageData;