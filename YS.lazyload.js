/*
 * YS lazyload plugin, depend jQuery
 * Author: YSjia
 * Email: i@yslove.net
 * Blog: http://yslove.net
 * License: GPLv2
 * Copyright (c) 2011 will Yuan/YSjia
 * */
(function(a){var b={init:function(d){return this.each(function(){a(this);var c=a.data(this,"YSlazyload");c?c._init.call(this,d):(a.data(this,"YSlazyload",b),b._init.call(this,d))})},_init:function(d){var c=this,f=a.extend({},a.fn.YSlazyload.settings,d);b.reposition.call(c,f);a(window).bind("scroll.YSlazyload resize.YSlazyload",function(){b.reposition.call(c,f)}).triggerHandler("scroll.YSlazyload");return this},getHolder:function(){var d=a.extend({},a.fn.YSlazyload.settings);return a(this).filter("["+
    d.srcHolder+"]")},reposition:function(d){var c=b.getHolder.call(this),f=a(window).height(),g=a(document).scrollTop();a(document).height();var h=d.holderTop;c.each(function(){var e=a(this),b=e.offset();0===e.height()&&(e.width(2),e.height(2));if(0<f-(b.top-g-h)){b=e.attr(d.srcHolder);2===e.width()&&e.width("auto").height("auto");e.attr("src",b).removeAttr(d.srcHolder).removeData("YSlazyload").css("opacity","0");var c=new Image;c.onload=function(){e.animate({opacity:100},3E3)};c.onerror=function(){};
    c.src=b;c=null}})}};a.fn.YSlazyload=function(a){if(b[a])return b[a].apply(this,Array.prototype.slice.call(arguments,1));if("object"===typeof a||!a)return b.init.apply(this,arguments);alert("Method "+a+" does not exist on YS.lazyload")};a.fn.YSlazyload.settings={srcHolder:"YSholder",holderTop:0}})(jQuery);jQuery(function(a){a("img").YSlazyload()});