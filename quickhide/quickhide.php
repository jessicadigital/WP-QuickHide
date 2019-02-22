<?php
/**
 * Plugin Name: Quick Hide
 * Plugin URI: https://github.com/jessicadigital/wp-quickhide
 * Description: A plugin to add a 'quick hide' button to all WordPress pages.
 * Version: 1.0
 * Author: Jessica Muirhead
 * Author URI: https://github.com/jessicadigital/
 */

/*
* Load our custom JS and CSS
*/
add_action('wp_enqueue_scripts', 'quickhide_enqueue_scripts');
function quickhide_enqueue_scripts() {
    wp_enqueue_script('quickhide', plugin_dir_url( __FILE__ ).'assets/quickhide.js', array('jquery'));
    wp_localize_script('quickhide', 'quickhide', array('assetURL' => plugin_dir_url( __FILE__ ).'assets/'));
    wp_enqueue_style('quickhide', plugin_dir_url( __FILE__ ).'assets/quickhide.css', false);
}
