(function () {
    'use strict';
    angular.module('app')
        .controller('createCampaignController', ['$scope', '$location', '$http', CreateCampaignController]);

    function CreateCampaignController($scope, $location, $http) {
        var self = this;
        $scope.buttonClick = function() {
          console.log("this button was clicked");
          $location.url('/login');
        }
      }
      CreateCampaignController.$inject = [];
    }
)();
