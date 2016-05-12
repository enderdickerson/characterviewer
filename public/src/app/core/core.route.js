(function() {
  stateConfig.$inject = ['$stateProvider'];
  angular
    .module('app.core')
    .config(stateConfig);

  function stateConfig($stateProvider) {
    $stateProvider
      .state('root', {
        abstract: true
      })
      // .state('root.landing', {
      //   url: '/',
      //   templateUrl: 'core/landing',
      //   data: { pageTitle: ''}
      // })
      .state('root.admin', {
        url: '/admin',
        templateUrl: 'core/admin',
        controller: 'AdminCtrl',
        data: { pageTitle: 'Admin'}
      })
      .state('root.error', {
        abstract: true
      })
      .state('root.error.pageNotFound', {
        url: '/404',
        templateUrl: 'core/pagenotfound',
        data: { pageTitle: 'Page not found'}
      })
  }
})();