<?php
/*
Plugin Name: The Lost Foundry: Gutenburg Block Custom Functions
Description: Plugin for creating custom Gutenburg blocks for the TLF theme
Version: 0.1
Author: Build 'n' Bloom
Author URI: https://buildnbloom.co.uk
*/

// Register the new group/category of gutenburg blocks,     
function custom_block_category( $categories ) {
    $custom_block = array(
        'slug'  => 'thelostfoundry',
        'title' => __( 'TLF Custom', 'thelostfoundry' ),
    );
  
    $categories_sorted = array();
    $categories_sorted[0] = $custom_block;
  
    foreach ($categories as $category) {
        $categories_sorted[] = $category;
    }
  
    return $categories_sorted;
}
add_filter( 'block_categories_all', 'custom_block_category', 10, 2);

// function for all custom blocks to be registered that are created
function custom_gutenburg_blocks()
{
    // global edit css
    wp_enqueue_style('plugin-css', get_template_directory_uri() . '/custom_plugins/style/plugin.css', array());

    $pluginFolder = "tlf-plugins";

    // video container
    generateRegisterScriptText($pluginFolder, "video_container", "video-container");
    // autoplay video
    generateRegisterScriptText($pluginFolder, "autoplay_video", "autoplay-video");
    // content container
    generateRegisterScriptText($pluginFolder, "content_container", "content-container");
    // quad image button
    generateRegisterScriptText($pluginFolder, "quad_image_button", "quad-image-button");
    // review carousel
    generateRegisterScriptText($pluginFolder, "review_carousel", "review-carousel");
    // review item
    generateRegisterScriptText($pluginFolder, "review_item", "review-item");
    // image background
    generateRegisterScriptText($pluginFolder, "image_background", "image-background");
    // accordian dropdown
    generateRegisterScriptText($pluginFolder, "accordian_dropdown", "accordian-dropdown");
    // carousel container
    generateRegisterScriptText($pluginFolder, "carousel_container", "carousel-container");

}
add_action('init', 'custom_gutenburg_blocks');

// function to register the blocks without having to duplicate code
function generateRegisterScriptText($pluginFolder, $jsName, $handleName)
{
    wp_register_script($handleName . '-js', get_template_directory_uri() . '/build'. '/' . $jsName .'.js', array( 'wp-blocks', 'wp-editor', 'wp-data', 'wp-components'));
    register_block_type( $pluginFolder . '/' . $handleName , array(
        'editor_script' => $handleName . '-js'
      ) );
}

?>
