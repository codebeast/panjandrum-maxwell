(function () {
    'use strict';
    angular.module('app')
        .controller('contactsController', ['$scope', '$location', '$http', ContactsController]);

    function ContactsController($scope, $location, $http) {
        var self = this;
        $scope.buttonClick = function() {
          console.log("this button was clicked");
          $location.url('/login');
        }
      }
    }
)();
