(function () {
  'use strict';
  angular.module('app')
  .controller('templatesController', ['$scope', '$location', '$http', '$rootScope', TemplatesController]);

  function TemplatesController($scope, $location, $http, $rootScope) {
    var self = this;
    $scope.templates = [{ 'name' : "test"}];

    $scope.loadData = function() {
      $http({
        method: 'GET',
        url: $rootScope.restAPIUrl + '/template'
      }).then(function successCallback(response) {
         $scope.templates = response.data;
      }, function errorCallback(response) {
        console.log(response)
      });
    };
    $scope.loadData();
  }
}
)();
