<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'the_lost_foundry' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'nY2H#r=/v=o:x=ZI%sbHt/On6ap/tQc6~kGl{wUe!xs!KkUpN`e})~m F|?>|GH[' );
define( 'SECURE_AUTH_KEY',  'v!qlJxLA YzMB5}RL4Q.q7w9VeY_9@}MgBomno483yf0A;[TerK_UnX@S6Ko <)d' );
define( 'LOGGED_IN_KEY',    '%KZ)uq/6 Md[4NpjHG3SIojy/0Sn65HuqPMQ{B^K[W 1onV[QezH1`K(Kv=Z!>GX' );
define( 'NONCE_KEY',        'n9~BE_PJIrqcP&(v2,:<%&y={ro8e.v@1-_i7dfUwAU(qk976v*9BSr*I2<o6h9c' );
define( 'AUTH_SALT',        '[A<Al+1NFcz5W1Fi^12ZP}k0qOJiKDm8{g@YC]$JWb<6q/EORXFdq.I8zT.H1[n0' );
define( 'SECURE_AUTH_SALT', '2><;3q[rUO$!#`pc%=,[}@=>,InLhOTJ0=?GcP,,^R1Gzp0qSGKdoi;k00sdjU#U' );
define( 'LOGGED_IN_SALT',   '/ ZH#R4q9`RgED?c=kSqXA^bSp-*g#+[aE1tA^^/mE.e;su!~(,`Q[/-3P9MW@DI' );
define( 'NONCE_SALT',       '63r!M</cvoCB 9cS25[]6NHgB3F12<+t_pf_g=:,gI| @]KTNPO}K|l^YP(yq,5C' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', true );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
