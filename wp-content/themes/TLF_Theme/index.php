<?php
get_header();

$page = get_posts([
    'name'      => 'home',
    'post_type' => 'page'
]);

echo $page[0]->post_content;

?>

<div class="instagram-feed">
    <?php echo do_shortcode('[instagram-feed feed=1]'); ?>
</div>

<?php

get_footer(); 

?>