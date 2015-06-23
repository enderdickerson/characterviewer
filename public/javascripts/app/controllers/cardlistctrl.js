(function() {
  angular.module('ndGame')
  	.controller('CardListCtrl', [
  	'$scope', 'CardService', CardListCtrl
  ]);

  function CardListCtrl($scope, CardService) {
    // $scope.decks = [
    //   {
    //     name: 'Northern Realms',
        // cards: [
        //   {
        //     name: 'Yennifer',
        //     strength: 7,
        //     ability: 'Heal'
        //   },
        //   {
        //     name: 'Geralt',
        //     strength: 15,
        //     ability: ''
        //   },
        //   {
        //     name: 'Ciri',
        //     strength: 15,
        //     ability: ''
        //   }
        // ]
    //   }
    // ];

    CardService.getAll().then(function(response) {
      $scope.cards = response;
    });
  }
})();
