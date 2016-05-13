(function() {
  urlProvider.$inject = ['$urlRouterProvider', '$locationProvider'];
  normalizePath.$inject = ['$location'];
  goToErrorPage.$inject = ['$injector'];
  angular
    .module('app')
    .config(urlProvider);

  /* @ngInject */
  function urlProvider($urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $urlRouterProvider.rule(normalizePath);

    $urlRouterProvider.otherwise(goToErrorPage);
  }

  /* @ngInject */
  function normalizePath($location) {
    var path = $location.path(), normalized = path.toLowerCase();
    if(path !== normalized) {
      $location.replace().path(normalized);
    }
  }

  /* @ngInject */
  function goToErrorPage($injector) {
    var $state = $injector.get('$state');
    $state.go('root.error.pagenotfound');
  }
})();