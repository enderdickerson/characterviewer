(function() {
  CharactersCtrl.$inject = ['$state', 'characters'];
  angular
    .module('app.characters')
    .controller('CharactersCtrl', CharactersCtrl);

  function CharactersCtrl($state, characters) {
    var vm = this;

    vm.characters = [];

    vm.goTo = goTo;

    activate();

    function activate() {
      sortCharacters();
    }

    function sortCharacters() {
      vm.characters = characters.sort(sortByOnline);
    }

    function sortByOnline(a, b) {
      if (a.online === b.online) {
        return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
      }

      return a.online > b.online ? -1 : a.online < b.online ? 1 : 0;
    }

    function goTo(character) {
      $state.go('root.characters.detail', {charactername: character});
    }
  }
})();
