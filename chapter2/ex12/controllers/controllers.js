// Create a module for our core AMail services.
var aMailServices = angular.module('aMailServices', ['ngRoute']);

// Set up our route so the AMail service can find it
aMailServices.config(function  ($routeProvider) {
	$routeProvider.
	when('/', {
		controller: ListController,
		templateUrl: 'list.html'
	}).
	// Notice that for the detail view, we specify a parametirized URL component
	// by placing a colon in front of the id
	when('/view/:id', {
		controller: DetailController,
		templateUrl: 'detail.html'
	}).
	otherwise({
		redirectTo: '/'
	});
});

// Some fake emails
messages = [
	{
		id: 0, sender: 'jean@somecompany.com', subject: 'Hi there, old friend.',
		date: 'Dec 7, 2013 12:32:00', recipients: ['greg@somecompany.com'],
		message: 'Hey, we should get together for lunch sometime and catch up.'
		+ 'There are many things we we should collaborate on this year.'
	},
	{
		id: 1, sender: 'maria@somecompany.com', subject: 'Where did you leave my laptop',
		date: 'Dec 7, 2013 12:32:00', recipients: ['greg@somecompany.com'],
		message: 'Hey, we should get together for lunch sometime and catch up.'
		+ 'There are many things we we should collaborate on this year.'
	},
	{
		id: 2, sender: 'bill@somecompany.com', subject: 'Lost python.',
		date: 'Dec 6, 2013 20:32:00', recipients: ['greg@somecompany.com'],
		message: 'Hey, we should get together for lunch sometime and catch up.'
		+ 'There are many things we we should collaborate on this year.'
	}
];

// Publish our messages for the list template
function ListController($scope){
	$scope.messages = messages;
}

// Get the messages id from the route (parsed from the URL) and use it to
// find the right message object.
function DetailController ($scope, $routeParams) {
	$scope.message = messages[$routeParams.id];
}
