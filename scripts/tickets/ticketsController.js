(function () {
    'use strict';
    angular.module('app')
        .controller('ticketsController', ['$scope', '$location', '$http', '$rootScope', TicketsController]);

    function TicketsController($scope, $location, $http, $rootScope) {
        var self = this;
        $scope.vouchers = [];
        $scope.loadData = function() {
          $http({
            method: 'GET',
            url: $rootScope.restAPIUrl + '/vouchers'
          }).then(function successCallback(response) {
             $scope.vouchers = response.data;
          }, function errorCallback(response) {
            console.log(response)
          });
        };
        $scope.loadData();
      }
    }
)();
