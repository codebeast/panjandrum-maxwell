(function () {
    'use strict';
    angular.module('app')
        .controller('ticketsController', ['$scope', '$location', '$http', TicketsController]);

    function TicketsController($scope, $location, $http) {
        var self = this;
        $scope.buttonClick = function() {
          console.log("this button was clicked");
          $location.url('/login');
        }
      }
    }
)();
