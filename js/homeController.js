angular.module('noServer').controller('homeController', function($scope, conversionService, $rootScope, $state) {

$scope.titleHidden = false;

$rootScope.$on('$stateChangeSuccess', function(){
  if($state.current.name === 'home'){
    $scope.titleHidden = false;
  }
  else {
    $scope.titleHidden = true;
  }

})

})
