'use strict';

angular.module('myApp.edit', ['ngRoute','service'])
    .controller('editEvent', ['getEvent','editEvent',"$routeParams", function(loginService,editService, routeParams) {
        console.log(routeParams.id);
        var vm = this;
        vm.events = [];
        loginService.getEvent(routeParams.id).success(function (event){
            console.log(event);
            vm.events = event;
            vm.description = vm.events.description;
            vm.tag = event.tags[0].tag;
            var latLng = new google.maps.LatLng(vm.events.position.lat, vm.events.position.long);
            placeMarker(latLng);
            vm.lat = vm.events.position.lat;
            vm.long = vm.events.position.long;

            map.panTo(latLng);
            map.setZoom(10);

        }).error(function (loginToken){
            console.log('fail');
        });
        //upprepad kod. även i create. var tvungen att lägga eventlistenern i modulen för att hitta scopet
        google.maps.event.addListener(map, 'click', function(event) {
            //K = lat
            //D = long
            placeMarker(event.latLng);
            vm.lat = event.latLng.k.toString().slice(0,10);
            vm.long = event.latLng.D.toString().slice(0,10);
            console.log(vm.lat, vm.long)

        });
        vm.editEvent = function() {

            vm.event = {
                event: {
                    creator_id: JSON.parse(sessionStorage.getItem('user')).id,
                    description: vm.description
                },

                position: {
                    lat:parseFloat(vm.lat),
                    long:parseFloat(vm.long)
                }
            }
            if(vm.event.event.description === ""){
                vm.result = 'describe the event';
                return;
            }
            if(isNaN(vm.event.position.lat)){
                vm.result = 'Choose a position on the map';
                return;
            }
            console.log(vm.event);
            console.log(JSON.parse(sessionStorage.getItem('user')));

            editService.editEvent(routeParams.id,vm.event).success(function (response){
                vm.result = response.message;
            }).error(function (response){
                vm.result = 'The event has not been edited. You only have permission to edit your own events';
            });
        }
    }]);



