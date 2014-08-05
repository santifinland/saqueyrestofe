'use strict';

angular.module('siteApp').factory('authorization', function ($http, config) {
	var url = config.backend.url;

	return {
		login: function (credentials) {
			return $http.post(url + '/api/account/login/', credentials);
		}
	};
});
