'use strict';

angular.module('siteApp').factory('authorization', function ($http, config, $cookieStore) {
	var url = config.backend.url;

	return {
		login: function (credentials) {
			$cookieStore.remove('token');
			return $http.post(url + '/api-token-auth/', credentials);
		},
	};
});
