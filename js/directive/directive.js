;(function(){
	var app = angular.module('locdee.directive',[]);
	app.directive('swiper', [function() {
	return {
		templateUrl: 'html/directive/swiper.html',
		link: function(scope, ele, attr) {
			var swiper = new Swiper('.swiper-container', {
				autoplay: 2000,
				pagination: '.swiper-pagination',
				paginationClickable: true,
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev',
				spaceBetween: 30,
				loop: true,
				slidesPerView: 'auto',
				loopedSlides: 2,
			});
		}
	}
}]);
app.directive('sidemanu', [function() {
	return {
		templateUrl: 'html/directive/sidemanu.html'
	}
}]);
app.directive('ngfooter', [function() {
	return {
		templateUrl: 'html/directive/footer.html'
	}
}]);
app.directive('ngheader', [function() {
	return {
		templateUrl: 'html/directive/header.html'
	}
}]);
})();
