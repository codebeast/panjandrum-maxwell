(function () {
    'use strict';
    angular.module('app')
        .controller('dashboardController', ['$scope', '$http', DashboardController]);

    function DashboardController($scope, $http) {
      console.log("created controller")
        var self = this;
        self.count = 100;
        
        $scope.buttonClick = function() {
          console.log("this button was clicked");
        }
      }
    }
)();
