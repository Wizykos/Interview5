(function() {
	window.onscroll = function() {
		let navbar = document.querySelector('.globalNav');

		if(document.body.scrollTop > 66 || document.documentElement.scrollTop > 66)
			navbar.style.setProperty('--navbar-opacity', '1');
		else
			navbar.style.setProperty('--navbar-opacity', '0');
	};
})();
