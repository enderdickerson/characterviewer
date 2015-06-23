angular
  .module('tcgApp', ['ngMaterial', 'ndGame', 'ui.router', 'ngMessages'])
  .config(function($mdThemingProvider){
    $mdThemingProvider.theme('default')
        .primaryPalette('indigo')
        .accentPalette('lime');

    $mdThemingProvider.theme('docs-dark')
        .primaryPalette('yellow')
        .dark();
  });

angular.module('tcgApp')
  .config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  // Now set up the states
  $stateProvider
    .state('landing', {
      url: '/',
      templateUrl: 'partials/landing.html'
    })
    .state('viewcards', {
      url: '/cardlist',
      templateUrl: 'partials/cards.html',
      controller: 'CardListCtrl'
    })
    .state('createcard', {
      url: '/card/create',
      templateUrl: 'partials/createcard.html',
      controller: 'CardCtrl'
    })
  });

angular.module('tcgApp')
  .config(function($locationProvider) {
    $locationProvider.html5Mode(true);
  });
