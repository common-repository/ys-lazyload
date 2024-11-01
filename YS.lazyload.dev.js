/*
 * YS lazyload plugin, depend jQuery
 * Author: YSjia
 * Email: i@yslove.net
 * Blog: http://yslove.net
 * License: GPLv2
 * */
(function($) {
	var methods = {
		init: function( options ) {
			return this.each( function() {
				var self = $(this),
					instance = $.data(this, 'YSlazyload');

				if(instance) {
					instance._init.call(this, options);
				} else {
					$.data(this, 'YSlazyload', methods);
					methods._init.call( this, options );
				}
			});
		},
		_init: function( options ) {
			var self = this,
				opt = $.extend({}, $.fn.YSlazyload.settings, options);

			methods.reposition.call(self, opt);

			$(window).bind('scroll.YSlazyload resize.YSlazyload', function() {
				methods.reposition.call( self ,opt );
			}).triggerHandler("scroll.YSlazyload");
			return this;
		},
		getHolder: function() {
			var opt = $.extend({},
				$.fn.YSlazyload.settings);
				
			return $(this).filter('[' + opt.srcHolder + ']');
		},
		reposition: function( options ) {
			var imgHolder = methods.getHolder.call(this);

			//if(!imgHolder.length){
			//	$(window).unbind("scroll.lazyload resize.lazyload");
			//	return false;
			//}

			var currentScreenHeight = $(window).height(),
			docScrollTop = $(document).scrollTop(),
			winHeight = $(document).height(),
			holderTop = options.holderTop;

			imgHolder.each(function(){
				var self = $(this);
				var imgTop = self.offset();
				
				//the width and height are explicitly set to 0 in chrome is "hidden", so we need hack it.
				if(self.height() === 0){
					self.width(2);
					self.height(2);
				}
				
				if(currentScreenHeight - ( imgTop.top - docScrollTop - holderTop ) > 0){
					var imgSrc = self.attr(options.srcHolder);
					
					//reset width and height to normal size
					if(self.width() === 2){
						self.width("auto").height("auto");
					}
					
					self
						.attr("src",imgSrc)
						.removeAttr(options.srcHolder)
						.removeData('YSlazyload')
						.css('opacity', '0');

					
											
					var img = new Image();
						img.onload = function(){
						self.animate({opacity: 100}, 3000);
						//tmp.removeData("osrc");
					};
					img.onerror = function(){
					    //alert("error!")};
                    }
					img.src = imgSrc;
					img = null;
					
				}
			});
		}
	};

	$.fn.YSlazyload = function(method) {
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			alert('Method ' + method + ' does not exist on YS.lazyload');
		}
	}
	$.fn.YSlazyload.settings = {
		srcHolder: "YSholder",
		holderTop: 0
	}

})(jQuery);

jQuery( function($) {
	$("img").YSlazyload();
});