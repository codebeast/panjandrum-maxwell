(function () {
    'use strict';
    angular.module('app')
        .controller('builderController', ['$scope', '$location', '$http', BuilderController]);

    function BuilderController($scope, $location, $http) {
        var self = this;
        $scope.buttonClick = function() {
          console.log("this button was clicked");
          $location.url('/login');
        }
      }
    }
)();
