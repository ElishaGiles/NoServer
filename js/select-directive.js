angular.module('noServer').directive('selectDirective', function($state) {

  return {
    restrict: 'EA',
    templateUrl: './views/directives/selectDirective.html',

    link: function(scope, element, attrs){
      scope.currencyHidden = true;
      scope.cookingHidden = true;
      scope.scienceHidden = true;
      scope.distanceHidden = true;


      if($state.current.name === 'cooking'){
        scope.currencyHidden = true;
        scope.cookingHidden = false;
        scope.scienceHidden = true;
        scope.distanceHidden = true;
        scope.typeFrom = 'teaspoon';
        scope.typeTo = 'tablespoon';
      }
      else if($state.current.name === 'currency'){
        scope.currencyHidden = false;
        scope.cookingHidden = true;
        scope.scienceHidden = true;
        scope.distanceHidden = true;
        scope.typeFrom = 'penny';
        scope.typeTo = 'nickel';

      }
      else if($state.current.name === 'science'){
        scope.currencyHidden = true;
        scope.cookingHidden = true;
        scope.scienceHidden = false;
        scope.distanceHidden = true;
        scope.typeFrom = 'ounce';
        scope.typeTo = 'pound';

      }
      else if($state.current.name === 'distance'){
        scope.currencyHidden = true;
        scope.cookingHidden = true;
        scope.scienceHidden = true;
        scope.distanceHidden = false;
        scope.typeFrom = 'inch';
        scope.typeTo = 'centimeter';

      }
    }
  }
});
