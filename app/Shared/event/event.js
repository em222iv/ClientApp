'use strict';

angular.module('myApp.events', ['ngRoute','service'])
    .controller('eventController', ['events', function(loginService) {
        var vm = this;
        vm.events = [];
        loginService.getEvents().success(function (events){
            console.log(events);
            vm.events = events;
            var marker;
            var infoWindows;
            for (var i = 0; i <  vm.events.length; i++) {
                var latLng = new google.maps.LatLng(vm.events[i].position.lat,vm.events[i].position.long);
                var desc = vm.events[i].description;

                var contentString = vm.events[i].description;

                infoWindows = new google.maps.InfoWindow({
                    position: latLng,
                    content: contentString,
                    maxWidth: 200
                });
                marker = new google.maps.Marker({
                    position: latLng,
                    map: map,
                    title: desc
                });
                (function(map, marker,infowindow) {

                    google.maps.event.addListener(marker, 'click', function() {
                        infowindow.open(map,marker);
                    });
                })(map,  marker,infoWindows);
            }
            map.setZoom(3);
            }).error(function (loginToken){
            console.log('fail');
        });
    }]).controller('creatorEvents', ['event',"$routeParams", function(loginService, routeParams) {
        console.log(routeParams.id);
        var vm = this;
        vm.events = [];

        loginService.getEventsByCreator(routeParams.id).success(function (event){
            console.log(event);
            vm.events = event;

        }).error(function (loginToken){
            console.log('fail');

        });

    }]);
