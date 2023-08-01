<?php
get_header();

$page = get_posts([
    'name'      => 'home',
    'post_type' => 'page'
]);

echo $page[0]->post_content;

get_footer(); 

?>