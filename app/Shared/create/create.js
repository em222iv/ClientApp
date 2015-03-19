'use strict';

angular.module('myApp.create', ['ngRoute','service'])
    .controller('createController', ['createEvent', function(loginService) {
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
           // document.getElementById('lat').value=event.latLng.k.toString().slice(0,7);
            //document.getElementById('long').value=event.latLng.D.toString().slice(0,7);
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
            console.log(vm.event);
            console.log(JSON.parse(sessionStorage.getItem('user')));
            loginService.createEvent(vm.event).success(function (response){
                vm.result = response;
               console.log(response);
            }).error(function (response){
                vm.result = response.message;

            });
        }

    }]);

