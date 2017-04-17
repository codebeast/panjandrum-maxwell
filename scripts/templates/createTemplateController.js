(function () {
  'use strict';
  angular.module('app')
  .controller('createTemplateController', ['$scope', '$location', '$http', '$rootScope', CreateTemplateController]);

  function CreateTemplateController($scope, $location, $http, $rootScope) {
    $scope.myFiles=[];
    $scope.name;
    $scope.imageURL = "https://cdn.pixabay.com/photo/2016/12/30/11/08/snake-1940343_960_720.png";

    $scope.handler=function(e,files){
      if (!files) {
        return;
      }
      var reader = new FileReader();
      var file = files[0];
      reader.onload = (function(theFile) {
                return function(e) {
                  $scope.$apply(function() {
                      $scope.imageURL = e.target.result;
                  });
                };
          })(file);
      reader.readAsDataURL(file);
    }


    // $http({
    //   method: 'POST',
    //   url: $rootScope.restAPIUrl + '/template',
    //   data : voucherList,
    // }).then(function successCallback(response) {
    //   $location.path("/vouchers");
    // }, function errorCallback(response) {
    //   console.log(response)
    // });

  }

})();
