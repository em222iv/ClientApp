'use strict';

angular.module('myApp.tags', ['ngRoute','service'])
    .controller('tagController', ['tags', function(loginService) {
        var vm = this;
        vm.tags = [];
        loginService.getTags().success(function (tags){
            console.log(tags);
            vm.tags = tags;
        }).error(function (tags){
            console.log('fail');
        });
    }]).controller('getTag', ['tag',"$routeParams", function(loginService, routeParams) {
        console.log(routeParams.id);
        var vm = this;
        vm.tags = [];
        loginService.getEventsByCreator(routeParams.id).success(function (tags){
            console.log(tags);
            vm.events = tags;

        }).error(function (loginToken){
            console.log('fail');

        });

    }]);
