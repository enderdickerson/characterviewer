(function() {
  runBlock.$inject = ['$rootScope', '$state', 'AuthToken'];
  angular
    .module('app')
    .run(runBlock);

  function runBlock($rootScope, $state, AuthToken) {
    $rootScope.$state = $state;
    $rootScope.AuthToken = AuthToken;
  }
})();
