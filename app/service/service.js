'use strict'
var auth = "2d089585b7c7899183454876f2d12f1d6531ad58"
angular.module('service', [])
    .service('login', ['$http' , function($http){
        this.getLogin = function(user) {
            console.log(user);
            var request = {
                url: "http://localhost:3000/auth.json",
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "creator": user.creator,
                    "password": user.password
                }
            }
            return $http(request);
        }
    }
]).service('events', ['$http' , function($http){
        this.getEvents = function() {
            var request = {
                url: "http://localhost:3000/api/event.json",
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization":this.auth ,
                    "ClientKey": JSON.parse(sessionStorage.getItem('user')).token
                }
            }
            return $http(request);
        }
    }
]).service('getEvent', ['$http' , function($http){
        this.getEvent = function(id) {
            var request = {
                url: "http://localhost:3000/api/event/"+id+".json",
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization":this.auth ,
                    "ClientKey": JSON.parse(sessionStorage.getItem('user')).token
                }
            }
            return $http(request);
        }
    }
    ]).service('creators', ['$http' , function($http){
        this.getCreators = function() {
            var request = {
                url: "http://localhost:3000/api/creator.json",
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization":this.auth ,
                    "ClientKey": JSON.parse(sessionStorage.getItem('user')).token
                }
            }
            return $http(request);
        }
    }
]).service('event', ['$http' , function($http){
        this.getEventsByCreator = function(id) {
            var request = {
                url: "http://localhost:3000/api/creator/"+id+".json",
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization":this.auth ,
                    "ClientKey": JSON.parse(sessionStorage.getItem('user')).token
                }
            }
            return $http(request);
        }
    }
]).service('tags', ['$http' , function($http){
        this.getTags = function() {
            var request = {
                url: "http://localhost:3000/api/tag.json",
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization":this.auth ,
                    "ClientKey": JSON.parse(sessionStorage.getItem('user')).token
                }
            }
            return $http(request);
        }
    }
    ]).service('tag', ['$http' , function($http){
        this.getTag = function(id) {
            var request = {
                url: "http://localhost:3000/api/tag/"+id+".json",
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization":this.auth ,
                    "ClientKey": JSON.parse(sessionStorage.getItem('user')).token
                }
            }
            return $http(request);
        }
    }
    ]).service('auth', [function() {

         this.isLoggedin = JSON.parse(sessionStorage.getItem('state'));

    }
    ]).service('search', ['$http' , function($http){
        this.eventSearch = function(search) {
            var request = {
                url: "http://localhost:3000/api/event.json?query="+search,
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization":this.auth ,
                    "ClientKey": JSON.parse(sessionStorage.getItem('user')).token
                }
            }
            return $http(request);
        }
    }
]).service('createEvent', ['$http' , function($http){
        this.createEvent = function(data) {
            console.log(data);
            var data = { "event": {"creator_id":data.event.creator_id, "description": data.event.description}, "tag": {"tag": data.tag.tag}, position: { "lat":data.position.lat,"long": data.position.long }};
         return $http.post(
                'http://localhost:3000/api/event.json',
                JSON.stringify(data),
                {
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization":this.auth ,
                        "ClientKey": JSON.parse(sessionStorage.getItem('user')).token
                    }
                }
            );
        }
    }
]).service('editEvent', ['$http' , function($http){
        this.editEvent = function(id,data) {
            console.log(id,data);
            var data = { "event": {"creator_id":data.event.creator_id, "description": data.event.description}, position: { "lat":data.position.lat,"long": data.position.long }};
            return $http.put(
                "http://localhost:3000/api/event/"+id+".json",
                JSON.stringify(data),
                {
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization":this.auth ,
                        "ClientKey": JSON.parse(sessionStorage.getItem('user')).token
                    }
                }
            );
        }
    }
]);