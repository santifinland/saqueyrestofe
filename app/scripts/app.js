'use strict';

var app = angular.module('siteApp', [
	'ngCookies',
	'ngResource',
	'ngSanitize'
]);

app.config(function ($routeProvider, $locationProvider, $httpProvider) {
	$httpProvider.responseInterceptors.push('httpInterceptor');

	$routeProvider
		.when('/', { templateUrl: 'views/site.html', controller: 'site' })
		.when('/login', { templateUrl: 'views/auth.html', controller: 'auth' })
		.otherwise({ redirectTo: '/' });

	$locationProvider.html5Mode(true);
});

app.run(function (api) {
	api.init();
});
