'use strict';

angular.module('siteApp').controller('auth', function ($scope, $location, $cookieStore, authorization, api) {
	$scope.title = 'Title';

	$scope.login = function () {
		var credentials = {
			username: this.username,
			password: this.password
		};

		var success = function (data) {
			var token = data.token;
			api.init(token);
			$cookieStore.put('token', token);
			$location.path('/');
		};

		var error = function () {
			console.log("error");
		};

		authorization.login(credentials).success(success).error(error);
	};
});