(function (){
  'use strict';
  var directives = angular.module("directives");
  var controllers = angular.module("controllers");

  var navbarDirective = directives.directive("navbarDirective", function () {
    return {
      controller: 'NavbarController',
      templateUrl: "./scripts/navbar/navbar.html"
    };
  });
  navbarDirective.$inject = [];

  controllers.controller('NavbarController', ['$scope', '$location', '$http', NavbarController]);

  function NavbarController($scope, $location, $http) {
      var self = this;

      $scope.isLoginPage = function() {
        var path = $location.path();
        return path.includes("/login");
      }
  }
  NavbarController.$inject = ['$scope', '$location', '$http'];
})();
