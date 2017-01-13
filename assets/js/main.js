;(function($) {


	$(function() {

		// Show, hide menu
		$(document).on('click', '.menu-toggle', function(event) {
			event.preventDefault();
		
			$('.menu').slideToggle();

			$(this).toggleClass('js-menu-opened');
		}); // end click

		// Add arrow-down if menu has submenu and arrow-right if doesn't it
		$('.menu li a').each(function(index, el) {
			var $this = $(this);

			if ($this.next().length > 0) {
				$this.addClass('has-submenu');
			} 

			if ( !$this.hasClass('has-submenu') ) {
				$this.addClass('has-no-submenu');
			}
		}); // end each

		$(document).on('click', '.menu__link', function(event) {
			event.preventDefault();
			
			var $this = $(this),
				currentItem = $this.next('.submenu'),
				link = $this.attr('href'),
				menu = $this.closest('.menu');

			// If submenu doesn't have third-menu, following a link	
			if (currentItem.length > 0) {

				//Close all submenu
				menu.find('.submenu, .third-menu').slideUp();

				if (currentItem.css('display') != 'block') {
					currentItem.slideDown();

					// All arrows-down
					menu.find('.menu__link').removeClass('has-submenu--open');

					// if submenu open arrow-up
					$this.addClass('has-submenu--open'); 

				} else {
					currentItem.slideUp();

					// if submenu close arrow-down
					$this.removeClass('has-submenu--open'); 
				}

			} else {
				menu.slideUp();

				setTimeout(function() {
					location.href = link;
				}, 600);
			}
		}); // end click

		$(document).on('click', '.submenu__link', function(event) {
			event.preventDefault();
			
			var $this = $(this),
				currentItem = $this.next('.third-menu'),
				link = $this.attr('href'),
				menu = $this.closest('.menu');

			// If submenu doesn't have third-menu, following a link	
			if (currentItem.length > 0) {

				//Close all submenu
				menu.find('.third-menu').slideUp();

				if (currentItem.css('display') != 'block') {
					currentItem.slideDown();

					// All arrows-down
					menu.find('.submenu__link').removeClass('has-submenu--open');

					// if submenu open arrow-up
					$this.addClass('has-submenu--open');  

				} else {
					currentItem.slideUp();

					// if submenu close arrow-down
					$this.removeClass('has-submenu--open'); 
				}

			} else {
				menu.slideUp();

				setTimeout(function() {
					location.href = link;
				}, 600);
			}
		}); // end click

		$(document).on('click', '.third-menu__link', function(event) {
			event.preventDefault();

			var $this = $(this),
				link = $this.attr('href');

			$this.closest('.menu').slideUp();

			setTimeout(function() {
				location.href = link;
			}, 600);
		}); // end click

		$(document).on('dblclick', '.menu__link, .submenu__link, .third-menu__link', function(event) {
			event.preventDefault();

			var $this = $(this),
				link = $this.attr('href');

			$this.closest('.menu').slideUp();

			setTimeout(function() {
				location.href = link;
			}, 700);
		}); // end dblclick
	}); //end ready

})(jQuery);