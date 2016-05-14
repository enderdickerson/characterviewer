(function() {
  CharacterDetailCtrl.$inject = ['character', 'itemTooltipService', '$timeout'];
  angular
    .module('app.characters')
    .controller('CharacterDetailCtrl', CharacterDetailCtrl);

  function CharacterDetailCtrl(character, itemTooltipService, $timeout) {
    var vm = this;

    vm.character = character;

    activate();

    function activate() {
      refreshTooltips();
    }

    function refreshTooltips() {
      $timeout(function() {
        itemTooltipService.refresh();
      }, 0);
    }
  }
})();
