(function() {
  charactersService.$inject = ['$http', 'moment'];
  angular
    .module('app.characters')
    .service('charactersService', charactersService);

  function charactersService($http, moment) {
    var root = this;

    root.allOnline = allOnline;
    root.get = get;
    root.translate = translate;
    
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
      character = getLastLogin(character);
      character = convertCopper(character);
      character = getEquipped(character);

      return character;
    }

    function getEquipped(character){
      var equipped = character.equipmentCache;

      var asList = equipped.split(' ');

      var slots = [
        {i: 0, slot: 'head'},
        {i: 2, slot: 'neck'},
        {i: 4, slot: 'shoulders'},
        {i: 6, slot: 'shirt'},
        {i: 8, slot: 'chest'},
        {i: 10, slot: 'waist'},
        {i: 12, slot: 'legs'},
        {i: 14, slot: 'feet'},
        {i: 16, slot: 'bracers'},
        {i: 18, slot: 'hands'},
        {i: 20, slot: 'ring'},
        {i: 22, slot: 'ring'},
        {i: 24, slot: 'trinket'},
        {i: 26, slot: 'trinket'},
        {i: 28, slot: 'cape'},
        {i: 30, slot: 'mainhand'},
        {i: 32, slot: 'offhand'},
        {i: 34, slot: 'ranged'}
      ];

      var i = 0,
        len = asList.length;
      while(i < len) {
        if (i % 2 === 0) {
          var j = 0,
            length = slots.length;
          while(j < length) {
            if (slots[j].i === i) {
              slots[j].item = asList[i];
              j = length;
            }
            j++;
          }
        }
        i++;
      }

      character.equipped = slots;
      return character;
    }

    function getLastLogin(character) {
      var now = moment();
      var logoutTime = moment(character.logout_time, 'X');

      character.lastLogin = now < logoutTime ? now : logoutTime;
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

    function convertToHoursMins(time) {
      var d = moment.duration(angular.copy(time), 'seconds');
      var hours = Math.floor(d.asHours());
      var mins = Math.floor(d.asMinutes()) - hours * 60;

      return hours + 'hrs ' + mins + 'mins';
    }

    function convertCopper(character) {
      var money = angular.copy(character.money);

      var gold = Math.floor(money/10000);
      var silver = Math.floor(money/100) - gold * 100;
      var copper = money - gold * 10000 - silver * 100;

      character.moneyDisplay = gold + 'g ' + silver + 's ' + copper + 'c';
      return character;
    }

    function getTotalTime(character) {
      character.totalTimeDisplay = convertToHoursMins(character.totaltime);
      return character;
    }

    function getTimeAtLevel(character) {
      character.timeAtLevelDisplay = convertToHoursMins(character.leveltime);
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
        case 10:
          race = 'Blood Elf';
          break;
        case 11:
          race = 'Draenei';
          break;
        default:
          race = 'unknown';
      }
      character.race = race;
      return character;
    }
  }
})();
