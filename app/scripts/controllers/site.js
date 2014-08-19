'use strict';

angular.module('siteApp').controller('site', function ($scope, authorization, api) {
	$scope.title = 'Logo';
	$scope.usersan = api.profile();
});
