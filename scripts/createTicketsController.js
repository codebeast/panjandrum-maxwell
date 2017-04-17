(function () {
  'use strict';
  angular.module('app')
  .controller('createTicketsController', ['$scope', '$location', '$http', '$rootScope', CreateTicketsController]);

  function CreateTicketsController($scope, $location, $http, $rootScope) {
    $scope.myFiles=[];
    $scope.name;
    $scope.vouchers = ["07946523565", "07946523563", "07946523564"];

    $scope.save = function () {
      var voucherList = {};
      voucherList.name = $scope.name;
      voucherList.vouchers = $scope.vouchers;

      $http({
        method: 'POST',
        url: $rootScope.restAPIUrl + '/vouchers',
        data : voucherList,
      }).then(function successCallback(response) {
        $location.path("/vouchers");
      }, function errorCallback(response) {
        console.log(response)
      });
    }

    $scope.handler=function(e,files){
      var reader = new FileReader();
      reader.onload=function(e){
        var string = reader.result;
        $scope.$apply(function () {
          $scope.vouchers = extractNumbers(string);
        });
      }
      reader.readAsText(files[0]);
    }

    function extractNumbers(data) {
      var numbers = [];
      var rows = data.split("\n");
      rows.forEach(function(rowData) {
        var elements = rowData.split(",");
        if (elements[0]) {
          numbers.push(elements[0]);
        }
      } );
      console.log(numbers);
      return numbers;
    }

  }
}
)();
