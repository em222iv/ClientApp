'use strict';
angular.module('myApp.EventByTag', ['ngRoute','service'])
    .controller('getEventByTag', ['eventByTag',"$routeParams", function(loginService, routeParams) {
        console.log(routeParams.id);
        var vm = this;
        vm.events = [];
        loginService.getEventsByTag(routeParams.id).success(function (events){
            console.log(events);
            vm.events = events

        }).error(function (loginToken){
            console.log('fail');
        });
        //upprepad kod. även i create. var tvungen att lägga eventlistenern i modulen för att hitta scopet

    }]);



