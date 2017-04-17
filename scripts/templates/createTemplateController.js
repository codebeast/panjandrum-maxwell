(function () {
  'use strict';
  angular.module('app')
  .controller('createTemplateController', ['$scope', '$location', '$http', '$rootScope', CreateTemplateController]);

  function CreateTemplateController($scope, $location, $http, $rootScope) {
    $scope.myFiles=[];
    $scope.name;
    $scope.size = 10;

    $scope.save = function () {
      var voucherList = {};
      voucherList.name = $scope.name;
      voucherList.vouchers = $scope.vouchers;

      $http({
        method: 'POST',
        url: $rootScope.restAPIUrl + '/template',
        data : voucherList,
      }).then(function successCallback(response) {
        $location.path("/vouchers");
      }, function errorCallback(response) {
        console.log(response)
      });
    }

    $scope.color = '#FF0000';

    // options - if a list is given then choose one of the items. The first item in the list will be the default
    $scope.options = {
      // html attributes
      // required: [false, true],
      // disabled: [false, true],
      placeholder: '',
      inputClass: '',
      id: undefined,
      name: undefined,
      // color
      format: ['rgb'],
      restrictToFormat:  true,
      hue:  true,
      saturation: true,
      lightness: true,
      alpha: false,
      // case: ['upper', 'lower'],
      // swatch
      swatch: true,
      swatchPos: 'left',
      swatchBootstrap:  false,
      swatchOnly: true,
      // popup
      round: false
      // pos: ['bottom left', 'bottom right', 'top left', 'top right'],
      // inline: [false, true],
      // show/hide
      // show: {
      //   swatch: [true, false],
      //   focus: [true, false],
      // },
      // hide: {
      //   blur: [true, false],
      //   escape: [true, false],
      //   click: [true, false],
      // },
      // // buttons
      // close: {
      //   show: [false, true],
      //   label: 'Close',
      //   class: '',
      // },
      // clear: {
      //   show: [false, true],
      //   label: 'Clear',
      //   class: '',
      // },
      // reset: {
      //   show: [false, true],
      //   label: 'Reset',
      //   class: '',
      // },
    };



  }
}
)();
