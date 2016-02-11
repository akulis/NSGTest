four51.app.directive('brandingAC', function() {
    var obj = {
        restrict: 'E',
        templateUrl: 'partials/brandingAC.html'
    }
    return obj;
});

four51.app.directive('homemessage', function() {
	var obj = {
		restrict: 'E',
		templateUrl: 'partials/messages/home.html'
	};
	return obj;
});
