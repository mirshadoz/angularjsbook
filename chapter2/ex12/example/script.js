// Create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute']);

scotchApp.config(function($routeProvider){
	$routeProvider
		// Route for the home page
		.when('/', {
			templateUrl	: 'home.html',
			controller 	: 'mainController'
		})

		// Route for the about page
		.when('/about', {
			templateUrl	: 'about.html',
			controller 	: 'aboutController'
		})

		// Route for the contact page
		.when('/contact', {
			templateUrl	: 'contact.html',
			controller 	: 'contactController'
		});
});

// Create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope){
	// Create a message to display in our view
	$scope.message = 'Everyone come and see how good I work & look!';
});

scotchApp.controller('aboutController', function($scope){
	$scope.message = "Look! I am an about page.";
});

scotchApp.controller('contactController', function($scope){
	$scope.message = "Look! I am an contact page.";
});
