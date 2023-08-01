<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-123089042-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-123089042-1');
    </script>

    <!-- Google search console -->
    <meta name="google-site-verification" content="ZEs2olfnfrOFDLQ2x0WxouIMYtbfQveXXNRezh0P26o" />

    <title><?php wp_title(); ?></title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="<?php get_bloginfo('description'); ?>">

    <?php $add_options = get_option('jfv_additional_settings_options'); ?>

    <link rel="icon" href="<?php echo get_bloginfo('template_directory'); ?>/images/tlf.jpg">
    <?php wp_head(); ?>

    <link rel="apple-touch-icon" href="<?php echo get_bloginfo('template_directory'); ?>/images/tlf.jpg" />
    <link rel="apple-touch-icon" sizes="72x72" href="<?php echo get_bloginfo('template_directory'); ?>/images/tlf.jpg" />
    <link rel="apple-touch-icon" sizes="114x114" href="<?php echo get_bloginfo('template_directory'); ?>/images/tlf.jpg" />
    <link rel="apple-touch-icon" sizes="144x144" href="<?php echo get_bloginfo('template_directory'); ?>/images/tlf.jpg" />

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous"></script>
    <script src="https://player.vimeo.com/api/player.js"></script>

  </head>

  <body>
<?php get_template_part('navigation', get_post_format()) ?>
