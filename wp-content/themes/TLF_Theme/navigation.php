<div class="mobile-nav-icon">
    <div class="icon">
        <i class="fa-solid fa-bars"></i>
    </div>
</div>

<div class="mobile-nav-page">
    <div class="close-nav"><i class="fa-solid fa-xmark"></i></div>

    <div class="navigation-items center-transform">
        <div class="logo">
            <img src="<?php echo get_bloginfo('template_directory'); ?>/images/tlf-long-logo.png"/>
        </div>

        <?php
          $args = array(
            'theme_location'    => 'primary',
            'depth'             => 2,
            'container'         => 'false',
            'menu_class'        => 'nav navbar-nav',
            'fallback_cb'       => 'wp_bootstrap_navwalker::fallback',

          );
        ?>
        <?php wp_nav_menu($args); ?>

        <div class="social-media">
            <a class="social-link" href="https://www.facebook.com/Studiolife91/">
                <i class="fab fa-facebook-square"></i>
            </a>
            <a class="social-link" href="https://www.instagram.com/the_lost_foundry/">
                <i class="fab fa-instagram"></i>
            </a>
            <a class="social-link" href="https://www.youtube.com/@TheLostFoundry">
                <i class="fa-brands fa-youtube"></i>
            </a>
            <a class="social-link" href="https://www.tiktok.com/@thelostfoundry">
                <i class="fa-brands fa-tiktok"></i>
            </a>
        </div>
    </div>
</div>

<nav class="navbar navbar-expand-lg desktop-nav">
  <div class="container-fluid container">
    <a class="navbar-brand" href="<?php echo get_site_url(); ?>">
        <img src="<?php echo get_bloginfo('template_directory'); ?>/images/tlf-long-logo.png"/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <?php
          $args = array(
            'theme_location'    => 'primary',
            'depth'             => 2,
            'container'         => 'false',
            'menu_class'        => 'nav navbar-nav',
            'fallback_cb'       => 'wp_bootstrap_navwalker::fallback',

          );
        ?>
        <?php wp_nav_menu($args); ?>
    </div>
  </div>
</nav>