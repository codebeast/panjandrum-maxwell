(function () {
    'use strict';

    var _templateBase = './scripts';

    var directives = angular.module("directives", []);
    var controllers = angular.module("controllers", []);

    angular.module('app', [
        'ngRoute',
        'ngCookies',
        'directives',
        'controllers'
    ])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
      $locationProvider.hashPrefix('!');
      $locationProvider.html5Mode({
        enabled: false,
        requireBase: false
      });

      $routeProvider.when('/clients', {
          templateUrl: _templateBase + '/clients/clients.html' ,
          controller: 'clientsController',
          controllerAs: '_ctrl'
      }).when('/login', {
        templateUrl: _templateBase + '/login/login.html' ,
          controller: 'loginController',
          controllerAs: '_ctrl'
      }).when('/dashboard', {
        templateUrl: _templateBase + '/dashboard/dashboard.html' ,
          controller: 'dashboardController',
          controllerAs: '_ctrl'
      });

      $routeProvider.otherwise({ redirectTo: '/dashboard' });
    }
  ])
  .run(run);

  run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
    function run($rootScope, $location, $cookieStore, $http) {
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                // $location.path('/login');
            }
        });
    }
})();
