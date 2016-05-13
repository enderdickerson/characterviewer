(function() {
  CharactersCtrl.$inject = ['$state', 'characters', 'socket', 'charactersService'];
  angular
    .module('app.characters')
    .controller('CharactersCtrl', CharactersCtrl);

  function CharactersCtrl($state, characters, socket, charactersService) {
    var vm = this;

    vm.characters = [];

    vm.goTo = goTo;

    activate();

    function activate() {
      sortCharacters();
      stream();
    }

    function stream() {
      socket.on('characters:update', function(data) {
        vm.characters = data.map(function(item) {
          return charactersService.translate(item);
        }).sort(sortByOnline);
      });
    }

    function sortCharacters() {
      vm.characters = characters.sort(sortByOnline);
    }

    function sortByOnline(a, b) {
      var aOnline = a.online;
      var bOnline = b.online;

      if (aOnline === bOnline) {
        var aLogoutTime = a.logout_time;
        var bLogoutTime = b.logout_time;

        if (aLogoutTime > bLogoutTime) {
          return -1;
        }

        if (aLogoutTime < bLogoutTime) {
          return 1;
        }

        if (aLogoutTime === bLogoutTime) {
          return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
        }
      }

      return aOnline > bOnline ? -1 : aOnline < bOnline ? 1 : 0;
    }

    function goTo(character) {
      $state.go('root.characters.detail', {charactername: character});
    }
  }
})();
