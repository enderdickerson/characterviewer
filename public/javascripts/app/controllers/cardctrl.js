(function() {
  angular.module('ndGame')
  	.controller('CardCtrl', [
  	'$scope', '$mdToast', '$state', 'AbilityService', 'CardService', 'Utils', 'data', CardCtrl
  ]);

  function CardCtrl($scope, $mdToast, $state, AbilityService, CardService, Utils, data) {
    var root = this;

    root.translateType = function() {
      if (!$scope.cardType) return;

      var type = $scope.cardType.toLowerCase();
      $scope.card[type] = true;
    };

    $scope.card = data || {};

    $scope.canRemove = !!$scope.card._id;

    AbilityService.getAll().then(function(response) {
      $scope.abilities = response;
    });

    $scope.types = [
      "Hero",
      "Special",
      "Leader"
    ];

    $scope.save = function() {
      if ($scope.cardForm.$invalid) {
        return;
      }

      root.translateType();

      CardService.add($scope.card).then(function(response) {
        Utils.toast('Card saved')
        $state.go('viewcards');
      }, function(error) {
        Utils.toast('Could not save card')
      });
    }

    $scope.remove = function() {
      CardService.remove($scope.card._id).then(function(response) {
        Utils.toast('Card ' + $scope.card.name + ' was removed')
        $state.go('viewcards');
      }, function(error) {
        Utils.toast('Card ' + $scope.card.name + ' could not be removed')
      });
    }
  }
})();
