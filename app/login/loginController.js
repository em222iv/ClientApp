'use strict';

angular.module('myApp.login', ['ngRoute','service'])
    .controller('LoginController', ['login','auth', function(loginService,auth) {
        var vm = this;
        vm.auth = auth;
        vm.user = JSON.parse(sessionStorage.getItem('user'));
        vm.logout = function() {
            vm.user = {}
            auth.isLoggedin = false;
            sessionStorage.setItem('user', JSON.stringify(vm.user));
            sessionStorage.setItem('state', JSON.stringify(auth.isLoggedin));
        }
        vm.login = function() {
            vm.auth.user = {
                id:null,
                creator:vm.creator,
                password:vm.password,
                token:""
        }

        loginService.getLogin(vm.auth.user).success(function (loginToken){
            console.log(loginToken);
            vm.auth.user.token = loginToken.auth_token;
            vm.auth.user.id = loginToken.id;
            vm.auth.user.password = "";
            sessionStorage.setItem('user', JSON.stringify(vm.auth.user));
           // var obj = JSON.parse(sessionStorage.getItem('user'));
            auth.isLoggedin = true;
            sessionStorage.setItem('state', JSON.stringify(auth.isLoggedin));

        }).error(function (loginToken){
            auth.isLoggedin = false;
            console.log(loginToken.error);
            vm.token = loginToken.error;
            vm.auth.user = {};

        });
    }
}]);