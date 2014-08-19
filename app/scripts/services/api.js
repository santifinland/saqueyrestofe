'use strict';

angular.module('siteApp').factory('api', function ($http, $cookies, config) {
	return {
		init: function (token) {
		    if (token === undefined) {
		        if ($cookies.token != undefined) {
		            var clean_token = $cookies.token.replace(/"/g, "");
		            $http.defaults.headers.common.Authorization = "JWT " + clean_token;
		        }
		    } else {
		        $http.defaults.headers.common.Authorization = "JWT " + token;
		    }
		},

		profile: function () {
            return $http.get(config.backend.url + '/api/profiles/');
        },
	};
});
