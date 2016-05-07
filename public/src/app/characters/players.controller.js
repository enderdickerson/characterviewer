(function() {
  PlayersCtrl.$inject = ['charactersService'];
  angular
    .module('app.characters')
    .controller('PlayersCtrl', PlayersCtrl);

  function PlayersCtrl(charactersService) {
    var vm = this;

    vm.onlineCharacters = [];
    vm.offlineCharacters = [];
    vm.refresh = refresh;

    activate();

    function activate() {
      getOnlineCharacters();
    }

    function sortByOnline(a, b) {
      if (a.online === b.online) {
        return a.name > b.name ? -1 : a.name < b.name ? 1 : 0;
      }

      return a.online > b.online ? -1 : a.online < b.online ? 1 : 0;
    }

    function getOnlineCharacters() {
      charactersService.allOnline().then(function(characters) {
        var sorted = characters.sort(sortByOnline);

        vm.onlineCharacters = sorted.filter(function(item) {
          return item.online === 1;
        });

        vm.offlineCharacters = sorted.filter(function(item) {
          return item.online === 0;
        });
      });
    }

    function refresh() {
      getOnlineCharacters();
    }
  }
})();
