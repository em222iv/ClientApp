'use strict';

angular.module('myApp.search', ['ngRoute','service'])
    .controller('searchController', ['search',"$routeParams", function(loginService, routeParams) {
        var vm = this;
        vm.result = [];
        console.log(routeParams.id);
            loginService.eventSearch(routeParams.id).success(function (result){
                console.log('1');
                console.log(result);
                vm.result = result;
            }).error(function (result){
                console.log('fail');
            });
    }]);

