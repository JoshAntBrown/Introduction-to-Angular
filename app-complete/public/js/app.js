$(document).foundation();

var app = angular.module('projectManagementApp', []);

app.factory('api', function($http){
	var factory = {};

	factory.getProjects = function(){
		return $http({ method: 'GET', url: '/api/projects' });
	}

	return factory;
});

app.controller('projectsCtrl', function($scope, api){

	api.getProjects().success(function(projects){
		$scope.projects = projects;
	});

});