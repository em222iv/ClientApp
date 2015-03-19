'use strict';

angular.module('myApp.creators', ['ngRoute','service'])
    .controller('creatorController', ['creators', function(loginService) {
        var vm = this;
        vm.creators = [];
        loginService.getCreators().success(function (creators){
            console.log(creators);
            vm.creators = creators;

        }).error(function (loginToken){
            console.log('fail');

        });
    }]).controller('getCreator', ['creator', function(loginService) {
        console.log('1');
        var vm = this;
        vm.creator = [];
        loginService.getCreator().success(function (creator){
            console.log(creator);
            vm.creator = creator;

        }).error(function (loginToken){
            console.log('fail');

        });
    }]);
