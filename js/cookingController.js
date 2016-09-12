angular.module('noServer').controller('cookingController', function($scope, conversionService) {

  $scope.titleHidden = true;
  $scope.cookingHidden = false;


$scope.submitted = function(num, typeFrom, typeTo) {
  $scope.returnValue = conversionService.outerConversion(num, typeFrom, typeTo)
}


})
