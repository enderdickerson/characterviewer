(function() {
  stateConfig.$inject = ['$stateProvider'];
  angular
    .module('app.core')
    .config(stateConfig);

  function stateConfig($stateProvider) {
    $stateProvider
      .state('landing', {
        url: '/',
        templateUrl: 'core/landing',
        data: { pageTitle: ''}
      })
      .state('admin', {
        url: '/admin',
        templateUrl: 'core/admin',
        controller: 'AdminCtrl',
        data: { pageTitle: 'Admin'}
      })
      .state('error', {
        abstract: true
      })
      .state('error.pageNotFound', {
        url: '/404',
        templateUrl: 'core/pagenotfound',
        data: { pageTitle: 'Page not found'}
      })
  }
})();