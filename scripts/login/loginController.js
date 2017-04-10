(function () {
    'use strict';
    angular.module('app')
        .controller('loginController', ['$scope', '$location', '$http', LoginController]);

    function LoginController($scope, $location, $http) {
        var self = this;

        self.buttonClick = function() {
          console.log("this button was clicked");
        }

        $scope.login = function() {
            console.log("logged in")
            $location.path("/dashboard");
        }
      }
    }
)();
