'use strict';

angular.module('shopApp', ['ngRoute','firebase'])
.value('fbUrl','https://shop-db.firebaseio.com/')
.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
