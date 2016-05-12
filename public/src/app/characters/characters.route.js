(function() {
  resolveCharacters.$inject = ['charactersService'];
  resolveCharacter.$inject = ['$stateParams', 'charactersService'];
  stateConfig.$inject = ['$stateProvider'];
  angular
    .module('app.characters')
    .config(stateConfig);

  function stateConfig($stateProvider) {
    $stateProvider
      .state('root.characters', {
        url: '/',
        views: {
          'content@': {
            templateUrl: 'characters/characters',
            controller: 'CharactersCtrl as vm'
          }
        },
        resolve: {
          characters: resolveCharacters
        },
        data: { pageTitle: 'Characters'}
      })
      .state('root.characters.detail', {
        url: 'characters/:charactername',
        views: {
          'content@': {
            templateUrl: 'characters/characterdetail',
            controller: 'CharacterDetailCtrl as vm'
          }
        },
        data: { pageTitle: 'Characters'},
        params: {
          charactername: null
        },
        resolve: {
          character: resolveCharacter
        }
      });
  }

  function resolveCharacters(charactersService) {
    return charactersService.allOnline();
  }

  function resolveCharacter($stateParams, charactersService) {
    return charactersService.get($stateParams.charactername);
  }
})();
