(function() {
  CharacterDetailCtrl.$inject = ['character'];
  angular
    .module('app.characters')
    .controller('CharacterDetailCtrl', CharacterDetailCtrl);

  function CharacterDetailCtrl(character) {
    var vm = this;

    vm.character = character;
  }
})();
