(function () {
    'use strict';
    angular.module('app')
        .controller('contactsController', ['$scope', '$location', '$http', '$rootScope', ContactsController]);

    function ContactsController($scope, $location, $http, $rootScope) {
        var self = this;
        $scope.contacts = [];
        $scope.loadData = function() {
          console.log("loaddata")
          $http({
            method: 'GET',
            url: $rootScope.restAPIUrl + '/contacts'
          }).then(function successCallback(response) {
             $scope.contacts = response.data;
          }, function errorCallback(response) {
            console.log(response)
          });
        };
        $scope.loadData();
      }
    }
)();
