(function() {
  angular.module('ndGame')
  	.controller('CardListCtrl', [
  	'$scope', 'CardService', CardListCtrl
  ]);

  function CardListCtrl($scope, CardService) {
    var root = this;

    root.addTypeIcons = function(cards) {
      var i = 0,
      len = cards.length;
      while(i < len) {
        var card = cards[i];

        var icon = 'person';

        if (card.special) {
          icon = 'stars';
        }
        if (card.hero) {
          icon = 'brightness_low';
        }
        if (card.weather) {
          icon = 'wb_cloudy';
        }

        card.typeicon = icon;
        i++;
      }

      return cards;
    }

    CardService.getAll().then(function(response) {
      var cards = root.addTypeIcons(response);
      $scope.cards = cards;
    });
  }
})();
