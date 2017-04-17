(function () {
  'use strict';
  angular.module('app')
  .controller('viewContactsController', ['$scope', '$location', '$http', '$rootScope', '$routeParams', ViewContactsController]);

  function ViewContactsController($scope, $location, $http, $rootScope, $routeParams) {
    var contactListId = $routeParams.id;
    $scope.contactList = [];
    $http({
      method: 'GET',
      url: $rootScope.restAPIUrl + '/contacts/' + contactListId
    }).then(function successCallback(response) {
      $scope.contactList = response.data;
    }, function errorCallback(response) {
      console.log(response)
    });
  }

}
)();
