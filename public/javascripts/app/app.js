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

  $urlRouterProvider.otherwise("/404");

  // Now set up the states
  $stateProvider
    .state('landing', {
      url: '/',
      templateUrl: 'partials/landing.html',
      data: { pageTitle: ''}
    })
    .state('register', {
      url: '/register',
      templateUrl: 'partials/register.html',
      controller: 'AuthCtrl',
      onEnter: ['$state', 'AuthToken', function($state, AuthToken){
        if(AuthToken.isLoggedIn()){
          $state.go('landing');
        }
      }]
    })
    .state('admin', {
      url: '/admin',
      templateUrl: 'partials/admin.html',
      controller: 'AdminCtrl',
      data: { pageTitle: 'Admin'}
    })
    .state('cards', {
      url: '/cards',
      templateUrl: 'partials/cards.html',
      controller: 'CardListCtrl',
      data: { pageTitle: 'Cards'}
    })
    .state('cards.edit', {
      url: '/:cardId',
      views: {
        'detail@cards': {
          templateUrl: 'partials/card.html',
          controller: 'CardCtrl'
        }
      },
      // templateUrl: 'partials/card.html',
      resolve: {
        data: ['$stateParams', 'CardService', function($stateParams, CardService) {
          return $stateParams.cardId ? CardService.get($stateParams.cardId) : {};
        }]
      },
      data: { pageTitle: 'Card detail'}
    })
    .state('viewabilities', {
      url: '/abilitylist',
      templateUrl: 'partials/abilities.html',
      controller: 'AbilityListCtrl',
      data: { pageTitle: 'Abilities'}
    })
    .state('editability', {
      url: '/ability/:abilityId',
      templateUrl: 'partials/ability.html',
      controller: 'AbilityCtrl',
      resolve: {
        data: ['$stateParams', 'AbilityService', function($stateParams, AbilityService) {
          return $stateParams.abilityId ? AbilityService.get($stateParams.abilityId) : {};
        }]
      },
      data: { pageTitle: 'Ability detail'}
    })
    .state('404', {
      url: '/404',
      templateUrl: 'partials/404.html',
      data: { pageTitle: 'Page not found'}
    })
  });

angular.module('tcgApp')
  .config(function($locationProvider) {
    $locationProvider.html5Mode(true);
  });

angular.module('tcgApp')
  .config(function($httpProvider) {
    $httpProvider.interceptors.push("AuthInterceptor");
  });

angular.module('tcgApp')
  .run(['$rootScope', '$state', 'AuthToken', function($rootScope, $state, AuthToken) {
    $rootScope.$state = $state;
    $rootScope.AuthToken = AuthToken;
  }]);
