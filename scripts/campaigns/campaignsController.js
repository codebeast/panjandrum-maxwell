(function () {
    'use strict';
    angular.module('app')
        .controller('campaignsController', ['$scope', '$location', '$http', CampaignsController]);

    function CampaignsController($scope, $location, $http) {
        var self = this;
        $scope.buttonClick = function() {
          console.log("this button was clicked");
          $location.url('/login');
        }

        $scope.campaigns = [
            {
              'name' : 'redemtion',
              'status' : 'active',
              'numberOfParticipants' : 5000,
              'redemptionRate' : 1000,
              'campaignType' : 'redemtion',
              'ticketRef': 'ticketRef',
              'advertRef': 'advertRef'
            },
            {
              'name' : 'referral',
              'status' : 'active',
              'numberOfParticipants' : 4000,
              'redemptionRate' : 4000,
              'campaignType' : 'referral',
              'ticketRef': 'ticketRef',
              'advertRef': 'advertRef'
            },
            {
              'name' : 'x-sell',
              'status' : 'active',
              'numberOfParticipants' : 1000,
              'redemptionRate' : 500,
              'campaignType' : 'crossSell',
              'ticketRef': 'ticketRef',
              'advertRef':'advertRef'
            }

          ];
      }
      CampaignsController.$inject = [];
    }
)();
