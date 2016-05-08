(function() {
  CharactersCtrl.$inject = ['charactersService', '$state'];
  angular
    .module('app.characters')
    .controller('CharactersCtrl', CharactersCtrl);

  function CharactersCtrl(charactersService, $state) {
    var vm = this;

    vm.onlineCharacters = [];
    vm.offlineCharacters = [];

    vm.refresh = refresh;
    vm.expandDetail = expandDetail;

    activate();

    function activate() {
      getOnlineCharacters();
    }

    function sortByOnline(a, b) {
      if (a.online === b.online) {
        return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
      }

      return a.online > b.online ? -1 : a.online < b.online ? 1 : 0;
    }

    function getOnlineCharacters() {
      charactersService.allOnline().then(function(characters) {
        var sorted = characters.sort(sortByOnline);

        var onlineToBool = sorted.map(function(item) {
          item.online = item.online === 1;
          return item;
        });

        vm.characters = onlineToBool;
      });
    }

    function expandDetail(character) {
      $state.go('characters.detail', {character: character});
    }

    function refresh() {
      getOnlineCharacters();
    }
  }
})();
