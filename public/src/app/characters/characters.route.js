(function() {
  resolveCharacter.$inject = ['$stateParams', '$q'];
  stateConfig.$inject = ['$stateProvider'];
  angular
    .module('app.characters')
    .config(stateConfig);

  function stateConfig($stateProvider) {
    $stateProvider
      .state('characters', {
        url: '/characters',
        views: {
          'content@': {
            templateUrl: 'characters/characters',
            controller: 'CharactersCtrl as vm'
          }
        },
        data: { pageTitle: 'Characters'}
      })
      .state('characters.detail', {
        views: {
          'detail@characters': {
            templateUrl: 'characters/characterdetail',
            controller: 'CharacterDetailCtrl as vm'
          }
        },
        data: { pageTitle: 'Characters'},
        params: {
          character: null
        },
        resolve: {
          character: resolveCharacter
        }
      });
  }

  function resolveCharacter($stateParams, $q) {
    return $q.when($stateParams.character)
  }
})();
