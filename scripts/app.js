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
    console.log("creating route provider");
    $locationProvider.hashPrefix('!');

    $locationProvider.html5Mode({
      enabled: false,
      requireBase: false
    });

    $routeProvider.when('/login', {
      templateUrl: _templateBase + '/login/login.html' ,
      controller: 'loginController',
      controllerAs: '_ctrl'
    }).when('/dashboard', {
      templateUrl: _templateBase + '/dashboard/dashboard.html' ,
      controller: 'dashboardController',
      controllerAs: '_ctrl'
    }).when('/capaigns', {
      templateUrl: _templateBase + '/campaigns/campaigns.html' ,
      controller: 'campaignsController',
      controllerAs: '_ctrl'
    }).when('/create/campaign', {
      templateUrl: _templateBase + '/campaigns/createcampaign.html' ,
      controller: 'createCampaignController',
      controllerAs: '_ctrl'
    }).when('/settings', {
      templateUrl: _templateBase + '/settings/settings.html' ,
      controller: 'settingsController',
      controllerAs: '_ctrl'
    }).when('/contacts', {
      templateUrl: _templateBase + '/contacts/contacts.html' ,
      controller: 'contactsController',
      controllerAs: '_ctrl'
    }).when('/templates', {
      templateUrl: _templateBase + '/templates/templates.html' ,
      controller: 'templatesController',
      controllerAs: '_ctrl'
    }).when('/tickets', {
      templateUrl: _templateBase + '/tickets/tickets.html' ,
      controller: 'ticketsController',
      controllerAs: '_ctrl'
    });

    $routeProvider.otherwise({ redirectTo: '/create/campaign' });
  }
])
.run(run);

run.$inject = ['$rootScope', '$location', '$cookieStore', '$http', '$timeout'];
function run($rootScope, $location, $cookieStore, $http, $timeout) {
  $rootScope.globals = $cookieStore.get('globals') || {};
  if ($rootScope.globals.currentUser) {
    $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
  }
  $rootScope.$on('$locationChangeStart', function (event, next, current) {
    var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
    var loggedIn = $rootScope.globals.currentUser;
    if (restrictedPage && !loggedIn) {
      // $location.path('/login');
      console.log("accessing restrictedPage");
      console.log($location.path());
    }
    $('select').material_select();
  });
  $rootScope.$on('$routeChangeSuccess', function (next, last) {
    console.log("on change")
    $timeout( function () {
      $('select').material_select();
    },50);
  });
}
})();
