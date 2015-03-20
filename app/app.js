// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.version',
    'myApp.login',
    'myApp.events',
    'myApp.creators',
    'myApp.tags',
    'myApp.search',
    'myApp.edit',
    'myApp.EventByTag',
    'myApp.create'
])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/events', {
            templateUrl: 'shared/event/event.html',
            controller: 'eventController',
            controllerAs: 'ctrl' // players could be seen as an instance of the controller, use it in the view!
        }).
        when('/creator-events/:id', {
            templateUrl: 'shared/event/event.html',
            controller: 'creatorEvents',
            controllerAs: 'ctrl' // players could be seen as an instance of the controller, use it in the view!
        }).
        when('/event/:id', {
            templateUrl: 'shared/edit/edit.html',
            controller: 'editEvent',
            controllerAs: 'ctrl' // players could be seen as an instance of the controller, use it in the view!
        }).
        when('/tags', {
            templateUrl: 'shared/tag/tags.html',
            controller: 'tagController',
            controllerAs: 'ctrl' // players could be seen as an instance of the controller, use it in the view!
        }).
        when('/tag/:id', {
            templateUrl: 'shared/EventyByTag/EventByTag.html',
            controller: 'getEventByTag',
            controllerAs: 'ctrl'
        }).
        when('/creators', {
            templateUrl: 'shared/creator/creators.html',
            controller: 'creatorController',
            controllerAs: 'ctrl' // teams could be seen as an instance of the controller, use it in the view!
        }).when('/login', {
            templateUrl: 'login/login.html',
            controller: 'LoginController'
        }).
        when('/logout', {
            templateUrl: 'login/login.html',
            controller: 'LoginController'
        }).
        when('/search/:id', {
            templateUrl: 'shared/search/search.html',
            controller: 'searchController',
            controllerAs: 'ctrl'
        }).
        when('/create', {
            templateUrl: 'shared/create/create.html',
            controller: 'createController',
            controllerAs: 'ctrl'
        }).otherwise({
            redirectTo: '/login'
        });
}]).directive('menu',function(){
    return {templateUrl: 'menu.html'}
}).directive('logout',function(){
        return {templateUrl: 'login/login.html'}
})
.controller('login', ['factory',function(fac){

}]);