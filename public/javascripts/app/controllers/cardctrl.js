(function() {
  angular.module('ndGame')
  	.controller('CardCtrl', [
  	'$scope', '$mdToast', 'AbilityService', 'CardService', 'Utils', CardCtrl
  ]);

  function CardCtrl($scope, $mdToast, AbilityService, CardService, Utils) {
    var root = this;

    $scope.card = {};

    root.reset = function() {
      $scope.card = {};
      $scope.cardForm.$setPristine();
    }

    AbilityService.getAll().then(function(response) {
      $scope.abilities = response;
    });

    $scope.save = function() {
      if ($scope.cardForm.$invalid) {
        return;
      }

      CardService.add($scope.card).then(function(response) {
        Utils.toast('Card saved')
        root.reset();
      }, function(error) {
        Utils.toast('Could not save card')
      });
    }
  }
})();
