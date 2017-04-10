(function () {
    'use strict';
    angular.module('app')
        .controller('templatesController', ['$scope', '$location', '$http', TemplatesController]);

    function TemplatesController($scope, $location, $http) {
        var self = this;
        $scope.buttonClick = function() {
          console.log("this button was clicked");
          $location.url('/login');
        }
      }
    }
)();
