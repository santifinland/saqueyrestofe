'use strict';

angular.module('siteApp').factory('httpInterceptor', function httpInterceptor ($q, $window, $location, $cookieStore) {
	return function (promise) {
		var success = function (response) {
			return response;
		};

		var error = function (response) {
			if (response.status === 401) {
			    $cookieStore.remove('token');
				$location.url('/login');
			}

			return $q.reject(response);
		};

		return promise.then(success, error);
	};
});
