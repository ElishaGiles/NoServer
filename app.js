angular.module('noServer', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: "./views/home.html",
      controller: 'homeController'
    })
    .state('cooking', {
      url: '/cooking',
      templateUrl: './views/cooking.html',
      controller: 'cookingController'
    })
    .state('distance', {
      url: '/distance',
      templateUrl: './views/distance.html',
      controller: 'distanceController'
    })
    .state('science', {
      url: '/science',
      templateUrl: './views/science.html',
      controller: 'scienceController'
    })
    .state('currency', {
      url: '/currency',
      templateUrl: './views/currency.html',
      controller: 'currencyController'
    })
    $urlRouterProvider
      .otherwise('/');

});
