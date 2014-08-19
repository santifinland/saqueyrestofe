'use strict';

angular.module('siteApp').controller('auth', function ($scope, $location, $cookieStore, authorization, api, $http) {
	$scope.title = 'Title';

	$scope.usersan = api.profile();

	$scope.login = function () {
		var credentials = {
			username: this.username,
			password: this.password
		};

		var success = function (data, status, headers, config) {
			var token = data.token;
			api.init(token);
			$cookieStore.put('token', token);
			$location.path('/');
		};

		var error = function () {
			$cookieStore.remove('token');
		};

		authorization.login(credentials).success(success).error(error);
	};
});