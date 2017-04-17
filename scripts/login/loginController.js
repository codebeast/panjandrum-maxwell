(function () {
  'use strict';
  angular.module('app')
  .controller('loginController', ['$scope', '$location', '$http', '$rootScope', LoginController]);

  function LoginController($scope, $location, $http, $rootScope) {
    var self = this;

    $scope.username = 'user';
    $scope.password = 'password';
    $scope.loginInvalid = false;

    $scope.login = function() {
      var authdata = btoa($scope.username + ':' + $scope.password);

      $rootScope.globals = {
        currentUser: {
          username: $scope.username,
          authdata: authdata
        }
      };

      $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
      $http({
        method: 'GET',
        url: $rootScope.restAPIUrl + '/account'
      }).then(function successCallback(response) {
        $scope.loginInvalid = false;
        $location.path("/dashboard");
      }, function errorCallback(response) {
        console.log(response)
        $rootScope.globals.currentUser = null;
        $scope.loginInvalid = true;
      });

    }
  }
}
)();
