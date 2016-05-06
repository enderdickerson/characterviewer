(function() {
  angular
    .module('app.core')
    .config(stateConfig);

  function stateConfig($stateProvider) {
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
      .state('error', {
        abstract: true
      })
      .state('error.pageNotFound', {
        url: '/404',
        templateUrl: 'partials/404.html',
        data: { pageTitle: 'Page not found'}
      })
  }
})();