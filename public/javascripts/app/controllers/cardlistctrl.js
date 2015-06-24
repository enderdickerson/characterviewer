(function() {
  angular.module('ndGame')
  	.controller('CardListCtrl', [
  	'$scope', 'CardService', CardListCtrl
  ]);

  function CardListCtrl($scope, CardService) {
    CardService.getAll().then(function(response) {
      $scope.cards = response;
    });
  }
})();
