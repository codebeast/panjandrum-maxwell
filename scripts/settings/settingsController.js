(function () {
    'use strict';
    angular.module('app')
        .controller('settingsController', ['$scope', '$location', '$http', SettingsController]);

    function SettingsController($scope, $location, $http) {
        var self = this;
        $scope.buttonClick = function() {
          console.log("this button was clicked");
          $location.url('/login');
        }
      }
    }
)();
