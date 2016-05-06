(function() {
  angular
    .module('app')
    .config(urlProvider);

  angular
    .module('app')
    .config(interceptors);

  /* @ngInject */
  function interceptors($httpProvider) {
    $httpProvider.interceptors.push("AuthInterceptor");
  }

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
    $state.go('error.pagenotfound');
  }
})();