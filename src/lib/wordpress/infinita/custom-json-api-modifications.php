<?php

/**
 * Plugin Name: Infinita Plugin
 * Description: Modifies the JSON API response for pages to include image URLs.
 * Author: Eduardo Di Nardo
 * Version: 1.0
 */

function get_homepage_data($data, $post)
{
    $acf_fields = get_fields($post->ID);
    $data->data['home_data'] = array();

    for ($i = 1; $i <= 4; $i++) {
        $home_item = array();

        /* Home page images */
        $image_field_name = 'featured_img_' . $i;
        if (isset($acf_fields[$image_field_name]) && $acf_fields[$image_field_name]) {
            $image_data = wp_get_attachment_image_src($acf_fields[$image_field_name], 'full');
            $home_item['img_url'] = $image_data[0];
        }

        /* Post title */
        $post_title = $acf_fields['work_id_' . $i]->post_title;
        $home_item['post_title'] = $post_title;

        /* Category names */
        $category_names = array();
        $categories = get_the_category($acf_fields['work_id_' . $i]->ID);
        foreach ($categories as $category) {
            $category_names[] = $category->name;
        }
        $home_item['category_names'] = $category_names;

        /* Order */
        $order = $acf_fields['order_' . $i];
        $home_item['order'] = $order;

        /* Build array */
        $data->data['home_data'][] = $home_item;
    }
}

function get_projects_data($data, $request)
{
    // Extract query parameters from the request
    $parameters = $request->get_params();

    $args = array(
        'post_type' => 'post',
        'post_status' => 'publish',
        'posts_per_page' => -1, // Get all posts by default
    );

    if (isset($parameters['project'])) {
        // Find post ID by exact post title or slug
        $post_slug = $parameters['project'];
        $post = get_page_by_path($post_slug, OBJECT, 'post');
        if ($post instanceof WP_Post && $post->post_name === $post_slug) {
            $args['p'] = $post->ID;
        }
    }

    // Query posts
    $posts = get_posts($args);
    $posts_data = array();

    foreach ($posts as $post) {
        $post_id = $post->ID;

        // Check if the retrieved post's slug matches the provided slug exactly
        if (!isset($parameters['project']) || $post->post_name === $post_slug) {
            $posts_data[] = array(
                'id' => $post_id,
                'slug' => $post->post_name,
                'title_en' => $post->post_title,
                'title_pt' => get_field('title_pt', $post_id),
                'categories' => wp_get_post_categories($post_id, array('fields' => 'names')),
                'year' => get_field('year', $post_id),
                'country_en' => get_field('country_en', $post_id),
                'country_pt' => get_field('country_pt', $post_id),
                'image_size' => get_field('image_size', $post_id),
                'description_en' => get_field('description_en', $post_id),
                'description_pt' => get_field('description_pt', $post_id),
                'video_en' => get_field('video_en', $post_id),
                'video_pt' => get_field('video_pt', $post_id),
                'image_gallery' => get_field('image_gallery', $post_id),
                'image_in_list' => wp_get_attachment_image_src(get_field('image_in_list', $post_id), 'large')
            );
        }
    }

    $data->data['projects'] = $posts_data;
}


function custom_rest_prepare_page($data, $post, $request)
{
    // Check if ACF plugin is active
    if (function_exists('get_fields')) {
        switch ($post->post_name) {
            case 'home-page':
                get_homepage_data($data, $post);
                break;
            case 'projects':
                get_projects_data($data, $request);
                break;
        }
    }
    return $data;
}

add_filter('rest_prepare_page', 'custom_rest_prepare_page', 10, 3);
