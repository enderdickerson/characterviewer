(function() {
  charactersService.$inject = ['$http'];
  angular
    .module('app.characters')
    .service('charactersService', charactersService);

  function charactersService($http) {
    var root = this;

    root.allOnline = allOnline;
    root.get = get;
    
    function get(name) {
      return $http.get('data/characters/' + name).then(function(result) {
        return translate(result.data);
      }, function(err) {
        console.log('error occurred', err);
      });
    }
    
    function getAll() {
      return $http.get('data/characters').then(function(result) {
        return result.data;
      }, function(err) {
        console.log('error occurred', err);
      });
    }

    function allOnline() {
      return getAll().then(function(response) {
        return response.map(function(item) {
          return translate(item);
        });
      });
    }

    function translate(character) {
      character = getRace(character);
      character = getGender(character);
      character = getTotalTime(character);
      character = getTimeAtLevel(character);
      character = getOnline(character);
      character = getClass(character);

      return character;
    }

    function getClass(character) {
      var characterClass = '';
      switch(character.class) {
        case 1:
          characterClass = 'Warrior';
          break;
        case 2:
          characterClass = "Paladin";
          break;
        case 3:
          characterClass = "Hunter";
          break;
        case 4:
          characterClass = "Rogue";
          break;
        case 5:
          characterClass = "Priest";
          break;
        case 7:
          characterClass = "Shaman";
          break;
        case 8:
          characterClass = "Mage";
          break;
        case 9:
          characterClass = "Warlock";
          break;
        case 11:
          characterClass = "Druid";
          break;
        default:
          characterClass = "unknown";
          break;
      }
      
      character.class = characterClass;
      return character;
    }

    function getOnline(character) {
      character.online = character.online === 1;
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
