'use strict';

angular.module('shopApp')
.controller('MainCtrl', ['$scope','$http','angularFireCollection','fbUrl'
        ,function ($scope,$http,angularFireCollection,fbUrl) {
            var initScope = function() {
                $scope.Products=angularFireCollection(new Firebase(fbUrl+'Products')); 
                //$scope.Products.forEach(function(eachProduct) {console.log(eachProduct);});
            };
            $scope.awesomeThings = [
                    'HTML5 Boilerplate',
                    'AngularJS',
                    'Karma'
                    ];
            initScope();
        }]);
