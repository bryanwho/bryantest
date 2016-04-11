(function ($) {
var $container = $('#portfolio-grid'),
			filters = {},
			items_count = $(".portfolio_item").size();
		isotopego = function () {
            setColumnWidth();
			$container.isotope({
				itemSelector : '.portfolio_item',
				hiddenClass : 'portfolio_hidden',
				resizable : false,
				transformsEnabled : true,
				layoutMode: 'masonry',
				masonry: {
					columnWidth: columnWidth(),
					gutterWidth: 12
				}
			});
}
		function getNumColumns(){
			
			var $folioWrapper = $('#portfolio-grid').data('cols');
			
			if($folioWrapper == '1col') {
				var winWidth = $("#portfolio-grid").width();		
				var column = 1;		
				return column;
			}
			
			if($folioWrapper == '2cols') {
				var winWidth = $("#portfolio-grid").width();		
				var column = 2;		
				if (winWidth<380) column = 1;
				return column;
			}
			
			else if ($folioWrapper == '3cols') {
				var winWidth = $("#portfolio-grid").width();		
				var column = 3;		
				if (winWidth<380) column = 1;
				else if(winWidth>=380 && winWidth<788)  column = 2;
				else if(winWidth>=788 && winWidth<1160)  column = 3;
				else if(winWidth>=1160) column = 3;
				return column;
			}
			
			else if ($folioWrapper == '4cols') {
				var winWidth = $("#portfolio-grid").width();		
				var column = 4;		
				if (winWidth<380) column = 1;
				else if(winWidth>=380 && winWidth<788)  column = 2;
				else if(winWidth>=788 && winWidth<1160)  column = 3;
				else if(winWidth>=1160) column = 4;		
				return column;
			}
			else if ($folioWrapper == '5cols') {
				var winWidth = $("#portfolio-grid").width();		
				var column = 5;		
				if (winWidth<380) column = 1;
				else if(winWidth>=380 && winWidth<788)  column = 2;
				else if(winWidth>=788 && winWidth<1160)  column = 3;
				else if(winWidth>=1160) column = 5;		
				return column;
			}
			else if ($folioWrapper == '6cols') {
				var winWidth = $("#portfolio-grid").width();		
				var column = 5;		
				if (winWidth<380) column = 1;
				else if(winWidth>=380 && winWidth<788)  column = 2;
				else if(winWidth>=788 && winWidth<1160)  column = 3;
				else if(winWidth>=1160) column = 6;		
				return column;
			}
			else if ($folioWrapper == '8cols') {
				var winWidth = $("#portfolio-grid").width();		
				var column = 5;		
				if (winWidth<380) column = 1;
				else if(winWidth>=380 && winWidth<788)  column = 2;
				else if(winWidth>=788 && winWidth<1160)  column = 3;
				else if(winWidth>=1160) column = 8;		
				return column;
			}
		}
		
		function setColumnWidth(){
			var columns = getNumColumns();		
		
			var containerWidth = $("#portfolio-grid").width();		
			var postWidth = containerWidth/columns;
			postWidth = Math.floor(postWidth)-12;
	 	
			$(".portfolio_item").each(function(index){
				$(this).css({"width":postWidth+"px"});
			});
}
function columnWidth() {
			
			var columns = getNumColumns();		
		
			var containerWidth = $("#portfolio-grid").width();		
			var postWidth = containerWidth/columns;
			postWidth = Math.floor(postWidth);
return postWidth;
}
		function arrange(){
		isotopego();
			setColumnWidth();		
			$container.isotope('reLayout');	
		}
			
		$(window).on("debouncedresize", function( event ) {	
			arrange();	
		});
		isotopego();
		// Filter projects
		$('.filter a').click(function(){
			var $this = $(this).parent('span');
			// don't proceed if already active
			if ( $this.hasClass('active') ) {
				return;
			}

			var $optionSet = $this.parents('.filter');
			// change active class
			$optionSet.find('.active').removeClass('active');
			$this.addClass('active');

			var selector = $(this).attr('data-filter');
			$container.isotope({ filter: selector });

			var hiddenItems = 0,
				showenItems = 0;
			$(".portfolio_item").each(function(){
				if ( $(this).hasClass('portfolio_hidden') ) {
					hiddenItems++;
				};
			});

			showenItems = items_count - hiddenItems;
			if ( ($(this).attr('data-count')) > showenItems ) {				
				$(".pagination__posts").css({"display" : "block"});
			} else {
				$(".pagination__posts").css({"display" : "none"});
			}
			return false;
		});

$(window).load(function () {
$container.isotope('reLayout');
});
}(jQuery));