angular.module('noServer').controller('distanceController', function($scope, conversionService) {

$scope.submitted = function(num, typeFrom, typeTo) {
  $scope.returnValue = conversionService.outerConversion(num, typeFrom, typeTo)
}


})
