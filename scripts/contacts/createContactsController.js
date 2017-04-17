(function () {
  'use strict';
  angular.module('app')
  .controller('createContactsController', ['$scope', '$location', '$http', '$rootScope', CreateContactsController]);

  angular.module('app')
  .directive('fileChange',['$parse', function($parse){
    return{
      require:'ngModel',
      restrict:'A',
      link:function($scope,element,attrs,ngModel){
        var attrHandler=$parse(attrs['fileChange']);
        var handler=function(e){
          $scope.$apply(function(){
            attrHandler($scope,{$event:e,files:e.target.files});
          });
        };
        element[0].addEventListener('change',handler,false);
      }
    }
  }]);

  function CreateContactsController($scope, $location, $http, $rootScope) {
    $scope.myFiles=[];
    $scope.name;
    $scope.numbers = ["07946523565", "07946523563", "07946523564"];

    $scope.save = function () {
      var contactList = {};
      contactList.name = $scope.name;
      contactList.numbers = $scope.numbers;
      
      $http({
        method: 'POST',
        url: $rootScope.restAPIUrl + '/contacts',
        data : contactList,
      }).then(function successCallback(response) {
        $location.path("/contacts");
      }, function errorCallback(response) {
        console.log(response)
      });
    }

    $scope.handler=function(e,files){
      var reader = new FileReader();
      reader.onload=function(e){
        var string = reader.result;
        $scope.$apply(function () {
          $scope.numbers = extractNumbers(string);
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
