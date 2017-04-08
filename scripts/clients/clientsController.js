(function () {
    'use strict';
    angular.module('app')
        .controller('clientsController', ['$http', ClientsController]);

    function ClientsController($http) {
        var self = this;

        self.buttonClick = function() {
          console.log("this button was clicked");
        }
      }
    }
)();
