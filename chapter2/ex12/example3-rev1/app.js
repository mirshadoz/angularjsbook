var MyApp = angular.module('MyApp', ['ngRoute']);

MyApp.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.
	when('/AddOrder', {
		templateUrl: 'templates/add_order.html',
		controller: 'AddOrderController'
	}).
	when('/ShowOrders', {
		templateUrl: 'templates/show_orders.html',
		controller: 'ShowOrdersController'
	}).
	otherwise({
		redirectTo: '/AddOrder'
	});
}]);

function AddOrderController ($scope) {
	$scope.message = "Welcome to Add Order Page";
}

function ShowOrdersController ($scope) {
	$scope.message = "Welcome to Show Orders Page";
}