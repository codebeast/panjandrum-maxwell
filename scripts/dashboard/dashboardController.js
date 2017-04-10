(function () {
    'use strict';
    angular.module('app')
        .controller('dashboardController', ['$scope', '$location', '$http', DashboardController]);

    function DashboardController($scope, $location, $http) {
        var self = this;
        $scope.buttonClick = function() {
          console.log("this button was clicked");
          $location.url('/login');
        }
      }
    }
)();
