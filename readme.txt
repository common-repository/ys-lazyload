=== Plugin Name ===
Contributors: YSjia
Donate link: http://yslove.net/
Tags: lazyload, image lazyload, server side lazyload images, image, ysjia, yslove, 图片延迟加载
Requires at least: 3.0
Tested up to: 3.1
Stable tag: trunk


== Description ==

Inspired by jQuery lazyload plug-in, but due to different browsers can not guarantee that images are lazy (like chrome), so using server-side image src attribute changes to ensure that all browsers can support.

YSLazyload lazy picture, only loaded after DOM elements finished, and to determine the current window to load and save your bandwidth resources.
Since changes in the service side image src attribute, so compatible with all browsers.
Note: Make sure your browser supports javascript and your blog should supported jQuery library


== Installation ==

1. Upload `ys-lazyload` to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress
3. Enjoy it!

 == Notice ==
Make sure your browser supports javascript and your blog should supported jQuery library

== Frequently Asked Questions ==

= A question that someone might have =

Q. Why is my theme is installed is not valid?

A. First of all we must determine the subject has been quoted jQuery library, and the theme in use must be included wp_header and wp_footer function.