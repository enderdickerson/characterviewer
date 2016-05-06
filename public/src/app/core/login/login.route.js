(function() {
  stateConfig.$inject = ['$stateProvider'];
  angular
    .module('app.core.login')
    .config(stateConfig);

  function stateConfig($stateProvider) {
    $stateProvider
      .state('register', {
        url: '/register',
        templateUrl: 'core/login/register',
        controller: 'AuthCtrl',
        onEnter: ['$state', 'AuthToken', function($state, AuthToken){
          if(AuthToken.isLoggedIn()){
            $state.go('landing');
          }
        }]
      });
  }
})();