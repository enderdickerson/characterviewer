(function() {
  CharacterDetailCtrl.$inject = ['character'];
  angular
    .module('app.characters')
    .controller('CharacterDetailCtrl', CharacterDetailCtrl);

  function CharacterDetailCtrl(character) {
    var vm = this;

    vm.character = {};

    activate();

    function activate() {
      vm.character = translate(angular.copy(character));
    }

    function translate(character) {
      character = getRace(character);
      character = getGender(character);
      character = getTotalTime(character);
      character = getTimeAtLevel(character);

      return character;
    }

    function getTotalTime(character) {
      character.totaltime = (character.totaltime/60) + ' minutes';
      return character;
    }

    function getTimeAtLevel(character) {
      character.leveltime = (character.leveltime/60) + ' minutes';
      return character;
    }

    function getGender(character) {
      character.gender = character.gender === 1 ? 'Female' : 'Male';
      return character;
    }

    function getRace(character) {
      var race = '';
      switch(character.race){
        case 1:
          race = 'Human';
          break;
        case 2:
          race = 'Orc';
          break;
        case 3:
          race = 'Dwarf';
          break;
        case 4:
          race = 'Night Elf';
          break;
        case 5:
          race = 'Undead';
          break;
        case 6:
          race = 'Tauren';
          break;
        case 7:
          race = 'Gnome';
          break;
        case 8:
          race = 'Troll';
          break;
        case 9:
          race = 'Draenei';
          break;
        case 10:
          race = 'Blood Elf';
          break;
        default:
          race = 'unknown';
      }
      character.race = race;
      return character;
    }
  }
})();
