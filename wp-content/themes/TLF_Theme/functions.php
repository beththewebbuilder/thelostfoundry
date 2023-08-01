<?php

function my_deregister_scripts(){
  wp_deregister_script( 'wp-embed' );
}
add_action( 'wp_footer', 'my_deregister_scripts' );

// Add thumbnails
add_theme_support('post-thumbnails');

//WordPress Titles
add_theme_support('title-tag');

//navigation menus
register_nav_menus(array(
  'primary' => __('Primary Menu'),
  'footer' => __('Footer Menu'),
));

add_action('wp_ajax_nopriv_bt_scf', 'bt_scf');
add_action('wp_ajax_save_bt_scf', 'bt_scf');

function styles_scripts_init() {
    //enqueue stylesheets
    wp_register_script('script', get_template_directory_uri() . '/script/script.js', array('jquery'),'',true);
    wp_enqueue_script('script');
    wp_enqueue_style('style', get_template_directory_uri() . '/style.css');

    // ajax
    wp_register_script('ajax-script', get_template_directory_uri() . '/script/ajax-script.js', array('jquery'),'',true);
    wp_localize_script('ajax-script','myajax',array('ajaxurl' => admin_url('admin-ajax.php')));
    wp_enqueue_script('ajax-script');

    // bootstrap
    wp_register_script('bootstrap-js', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js', array('jquery') );
    wp_register_script('popper-js', 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js', array('jquery'));
    wp_register_style('bootstrap-css', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css', '', '', 'screen');
    wp_enqueue_script('bootstrap-js');
    wp_enqueue_script('popper-js');
    wp_enqueue_style('bootstrap-css');

    // fontawesome
    wp_register_script('font-awesome', ("https://kit.fontawesome.com/f8042aa37c.js"));
    wp_enqueue_script('font-awesome');

    // slick slider
    wp_register_script('slick-slider-js', get_template_directory_uri() . '/slick-slider/slick/slick.js', array('jquery'),'',true);
    wp_register_script('slick-slider-js-min', get_template_directory_uri() . '/slick-slider/slick/slick.min.js', array('jquery'),'',true);
    wp_enqueue_script('slick-slider-js');
    wp_enqueue_script('slick-slider-js-min');

    // vimeoplayer
    wp_register_script('vimeoplayer', 'https://player.vimeo.com/api/player.js', array('jquery'),'', true);
    wp_enqueue_script('vimeoplayer');

    //enqueue STYLESHEETS
    wp_enqueue_style( 'slick-slider', get_template_directory_uri() . '/slick-slider/slick/slick.css' );
    wp_enqueue_style( 'slick-slider-theme', get_template_directory_uri() . '/slick-slider/slick/slick-theme.css' );
}
add_action( 'wp_enqueue_scripts', 'styles_scripts_init' );

/**
 * Proper ob_end_flush() for all levels
 *
 * This replaces the WordPress `wp_ob_end_flush_all()` function
 * with a replacement that doesn't cause PHP notices.
 */
remove_action( 'shutdown', 'wp_ob_end_flush_all', 1 );
add_action( 'shutdown', function() {
   while ( @ob_end_flush() );
} );

 ?>
