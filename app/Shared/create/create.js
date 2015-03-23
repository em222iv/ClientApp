'use strict';

angular.module('myApp.create', ['ngRoute','service'])
    .controller('createController', ['createEvent','$scope','$location', function(loginService,$scope,$location) {
        var vm = this;
        vm.event = {};
        //upprepad kod. även i edit. var tvungen att lägga eventlistenern i modulen för att hitta scopet
        google.maps.event.addListener(map, 'click', function(event) {
            //K = lat
            //D = long
            console.log(event.latLng);
            placeMarker(event.latLng);
            vm.lat = event.latLng.k.toString().slice(0,10);
            vm.long = event.latLng.D.toString().slice(0,10);
            console.log(vm.lat, vm.long)
        });

        vm.createEvent = function() {

            vm.event = {
                event: {
                    creator_id: JSON.parse(sessionStorage.getItem('user')).id,
                    description: vm.description
                },
                tag: {
                    tag: vm.tag
                },
                position: {
                    lat:parseFloat(vm.lat),
                    long:parseFloat(vm.long)
                }
            }
            if(vm.event.event.description == undefined){
                vm.result = 'describe the event';
                return;
            }
            if(vm.event.tag.tag == undefined){
                vm.result = 'describe the type of event';
                return;
            }

            if(isNaN(vm.event.position.lat)){
                vm.result = 'Choose a position on the map';
                return;
            }
            console.log(vm.event);
            console.log(JSON.parse(sessionStorage.getItem('user')));
            loginService.createEvent(vm.event).success(function (response){
                console.log($scope,$location);
                vm.result = response.message;
                console.log('/ClientApp/app/index.html#/creator-events/'+JSON.parse(sessionStorage.getItem('user')).id);
               // $location.path('/ClientApp/app/index.html#/creator-events/'+JSON.parse(sessionStorage.getItem('user')).id);
                $location.path('/creator-events/'+JSON.parse(sessionStorage.getItem('user')).id);

            }).error(function (response){
                vm.result = response.message;

            });
        }

    }]);

