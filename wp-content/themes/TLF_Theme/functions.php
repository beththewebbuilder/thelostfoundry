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

  // ajax
  wp_register_script('ajax-script', get_template_directory_uri() . '/script/ajax-script.js', [ 'wp-util' ]);
  wp_localize_script('ajax-script','myajax',array('ajaxurl' => admin_url('admin-ajax.php')));
  wp_enqueue_script('ajax-script');
}
add_action( 'wp_enqueue_scripts', 'styles_scripts_init' );

 ?>
