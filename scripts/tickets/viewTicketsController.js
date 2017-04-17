(function () {
  'use strict';
  angular.module('app')
  .controller('viewTicketsController', ['$scope', '$location', '$http', '$rootScope', '$routeParams', ViewTicketsController]);

  function ViewTicketsController($scope, $location, $http, $rootScope, $routeParams) {
    var voucherListId = $routeParams.id;
    $scope.voucherList = [];
    $http({
      method: 'GET',
      url: $rootScope.restAPIUrl + '/vouchers/' + voucherListId
    }).then(function successCallback(response) {
      $scope.voucherList = response.data;
    }, function errorCallback(response) {
      console.log(response)
    });
  }

}
)();
