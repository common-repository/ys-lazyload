<?php
/*
 * Plugin Name: YS images lazyload (Server Side)
 * Plugin URI: http://yslove.net/2011/04/wordpress-plugin-ys-lazyload/
 * Description: Change the images src attribute in the service side, so as to achieve a real lazy load, and is compatible with all browsers.
 * Author: YSjia
 * Version: 1.4
 * Author URI: http://yslove.net
 */

if(!is_admin()) {
	//depend jquery
	//wp_enqueue_script('jquery');
	wp_enqueue_script('YSlazyload',  plugins_url('YS.lazyload.js', __FILE__), "", "1.0", true);

	function YS_lazyload_callback($buffer) {
		$pattern = '/((?:\<img).*)(src)/';
		$buffer = preg_replace($pattern, "$1 src='".home_url()."/wp-content/plugins/ys-lazyload/t.gif' YSholder", $buffer);
		return $buffer;
	}

	function YS_buffer_start() {
		 ob_start("YS_lazyload_callback");
	}

	function YS_buffer_end() {
		 ob_end_flush();
	}

	add_action('wp_head', 'YS_buffer_start');
	add_action('wp_footer', 'YS_buffer_end');

}
?>