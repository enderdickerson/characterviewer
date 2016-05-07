(function() {
  stateConfig.$inject = ['$stateProvider'];
  angular
    .module('app.characters')
    .config(stateConfig);

  function stateConfig($stateProvider) {
    $stateProvider
      .state('players', {
        url: '/players',
        templateUrl: 'characters/players',
        controller: 'PlayersCtrl as vm',
        data: { pageTitle: 'Players'}
      });
  }
})();
