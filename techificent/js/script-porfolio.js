(function ($, root, undefined) {

	$(function () {

		'use strict';

		function handleFirstTab(e) {
			if (e.keyCode === 9) { // the "I am a keyboard user" key
				document.body.classList.add('user-is-tabbing');
				window.removeEventListener('keydown', handleFirstTab);
			}
		}

		window.addEventListener('keydown', handleFirstTab);

		/*------------------------------------*\
		  TURN OFF ANIMATIONS FOR MOBILE
		\*------------------------------------*/

		AOS.init({
			offset: 200,
			duration: 1000,
			// disable : function() {
			// 	var maxWidth = 1025;
			// 	return window.innerWidth < maxWidth;
			// }
		});

		/*------------------------------------*\
		  HEADER
		\*------------------------------------*/

		var c, currentScrollTop = 0,
			header = $('header');

		$(window).scroll(function () {
			var a = $(window).scrollTop();
			var b = header.height();

			currentScrollTop = a;

			if (c < currentScrollTop && a > b + b) {
				header.addClass("scrolldown");
			} else if (c > currentScrollTop && !(a <= b)) {
				header.removeClass("scrolldown");
			}

			c = currentScrollTop;

			if (c >= b) {
				header.addClass('scrolled');
			} else {
				header.removeClass('scrolled');
			}

			if ($("body").hasClass("hidenav")) {
				$("body").removeClass("hidenav");
			}

		});

		/*------------------------------------*\
		  SHOW MENU
		\*------------------------------------*/

		$('.nav-ctrl').click(function () {
			$('#nav-toggle').toggleClass('menuopen');
			$('#menu-header').toggleClass('activemenu');
			$('.mh-content').toggleClass('fadeInUp');
		});

		/*------------------------------------*\
		  MENU BG 
		\*------------------------------------*/

		$(".main-menu li a").hover(function () {
			//var bgclass = $(this).closest("li").attr("id");
			$('body').toggleClass("hovered");
			//$('.mhbg-img[data-id=' + bgclass + ']').toggleClass('current-bg');
		});

		/*------------------------------------*\
		  PLAY VIDEO
		\*------------------------------------*/

		var player = document.getElementById('player');

		var player2;

		$('.btn-play').on('click', function () {
			player.play();
			$(this).hide();
		});

		$('.btn-play2').on('click', function () {
			var csvideo = $(this).data("id");
			var player2 = document.getElementById(csvideo);
			player2.play();
			$(player2).attr('controls', 'true');
			$(this).hide();
			$("body").addClass("hidenav");
		});

		$(player).on('play', function (e) {
			$(this).attr('controls', 'true');
			$("body").addClass("hidenav");
		});

		/*------------------------------------*\
		  PROJECT SLIDER
		\*------------------------------------*/

		if ($(".projectslider")[0]) {
			var slider = tns({
				container: '.projectslider',
				edgePadding: 26,
				fixedWidth: 160,
				swipeAngle: false,
				speed: 400,
				controls: false,
				nav: false,
				mouseDrag: true,
				responsive: {
					768: {
						fixedWidth: 200,
						edgePadding: 36
					},
					1024: {
						fixedWidth: 240,
						edgePadding: 40
					},
					1280: {
						fixedWidth: 360,
						edgePadding: 56
					},
					1540: {
						fixedWidth: 445,
						edgePadding: 72
					},
				}
			});
			document.querySelector('.proj-next').onclick = function (e) {
				e.preventDefault();
				slider.goTo('next');
			};
			document.querySelector('.proj-prev').onclick = function (e) {
				e.preventDefault();
				slider.goTo('prev');
			};
		}

		/*------------------------------------*\
		  CAP SLIDER
		\*------------------------------------*/

		if ($(".capslider")[0]) {
			var capslider = tns({
				container: '.capslider',
				edgePadding: 120,
				fixedWidth: 250,
				swipeAngle: false,
				speed: 400,
				controls: false,
				nav: false,
				mouseDrag: true,
				responsive: {
					768: {
						fixedWidth: 308,
						edgePadding: 120
					},
					1280: {
						fixedWidth: 380,
						edgePadding: 120
					},
				}
			});
			document.querySelector('.cap-next').onclick = function (e) {
				e.preventDefault();
				capslider.goTo('next');
			};
			document.querySelector('.cap-prev').onclick = function (e) {
				e.preventDefault();
				capslider.goTo('prev');
			};
		}

		/*------------------------------------*\
		  CLIENT SLIDER
		\*------------------------------------*/

		if ($(".clientslider")[0]) {
			var clientslider = tns({
				container: '.clientslider',
				items: 3,
				gutter: 16,
				swipeAngle: false,
				speed: 400,
				autoplay: true,
				controls: false,
				nav: false,
				mouseDrag: true,
				responsive: {
					768: {
						items: 4,
					},
				}
			});
			document.querySelector('.client-next').onclick = function (e) {
				e.preventDefault();
				clientslider.goTo('next');
			};
			document.querySelector('.client-prev').onclick = function (e) {
				e.preventDefault();
				clientslider.goTo('prev');
			};
		}

		if ($(".capclientslider")[0]) {
			var clientslider = tns({
				container: '.capclientslider',
				items: 3,
				gutter: 16,
				swipeAngle: false,
				speed: 400,
				autoplay: true,
				controls: false,
				nav: false,
				mouseDrag: true,
				responsive: {
					768: {
						disable: true
					},
				}
			});
			document.querySelector('.client-next').onclick = function (e) {
				e.preventDefault();
				clientslider.goTo('next');
			};
			document.querySelector('.client-prev').onclick = function (e) {
				e.preventDefault();
				clientslider.goTo('prev');
			};
		}

		/*------------------------------------*\
		  AWARD SLIDER
		\*------------------------------------*/

		if ($(".awardslider")[0]) {
			var awslider = tns({
				container: '.awardslider',
				edgePadding: 120,
				fixedWidth: 250,
				swipeAngle: false,
				speed: 400,
				controls: false,
				nav: false,
				mouseDrag: true,
				responsive: {
					768: {
						fixedWidth: 308,
						edgePadding: 120
					},
					1280: {
						fixedWidth: 380,
						edgePadding: 120
					},
				}
			});
			document.querySelector('.aw-next').onclick = function (e) {
				e.preventDefault();
				awslider.goTo('next');
			};
			document.querySelector('.aw-prev').onclick = function (e) {
				e.preventDefault();
				awslider.goTo('prev');
			};
		}

		/*------------------------------------*\
		  CAP PAGE (MOBILE)
		\*------------------------------------*/

		$('.cap-ctrl').click(function () {
			$(this).next().slideToggle();
			$(this).children('.chevron').toggleClass('rotate');
		});

		/*------------------------------------*\
		  GG VOLUME CONTROL
		\*------------------------------------*/

		$(".herovol").click(function () {
			$("#bgvid").prop('muted', !$("#bgvid").prop('muted'));
			$(this).toggleClass('sound');
		});

		/*------------------------------------*\
		  ABOUT SHOW BIO
		\*------------------------------------*/

		$('.showbio').click(function (e) {
			e.preventDefault();
			alert('bio');
		});

		/*------------------------------------*\
		  SOCIAL SHARING
		\*------------------------------------*/

		$('a.share').click(function (e) {
			e.preventDefault();
			var $link = $(this);
			var href = $link.attr('href');
			var network = $link.attr('data-network');

			var networks = {
				facebook: {
					width: 600,
					height: 300
				},
				twitter: {
					width: 600,
					height: 254
				},
				linkedin: {
					width: 600,
					height: 473
				}
			};

			var popup = function (network) {
				var options = 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,';
				window.open(href, '', options + 'height=' + networks[network].height + ',width=' + networks[network].width);
			}
			popup(network);
		});


		/*------------------------------------*\
		  WAYPOINTS ABOUT PAGE
		\*------------------------------------*/

		var badges = document.getElementById('badges');
		var bgchange = document.getElementById('bgchange');
		var awards = document.getElementById('awards');
		if (bgchange) {
			new Waypoint({
				element: bgchange,
				handler: function (direction) {
					if (direction === 'down') {
						$('body').addClass('darken');
					} else if (direction === 'up') {
						$('body').removeClass('darken');
					}
				},
				offset: '300'
			});
		}
		if (badges) {
			new Waypoint({
				element: badges,
				handler: function (direction) {
					if (direction === 'down') {
						$('body').removeClass('darken');
						$(this.element).addClass('showbadges');
					} else if (direction === 'up') {
						$('body').addClass('darken');
						$(this.element).removeClass('showbadges');
					}
				},
				offset: '300'
			});
		}
		if (awards) {
			new Waypoint({
				element: awards,
				handler: function (direction) {
					if (direction === 'down') {
						$('#badges').removeClass('showbadges');
					} else if (direction === 'up') {
						$('#badges').addClass('showbadges');
					}
				},
				offset: '400'
			});
		}

	});

})(jQuery, this);