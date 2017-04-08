(function () {
    'use strict';
    angular.module('app')
        .controller('loginController', ['$http', LoginController]);

    function LoginController($http) {
        var self = this;

        self.buttonClick = function() {
          console.log("this button was clicked");
        }
      }
    }
)();
