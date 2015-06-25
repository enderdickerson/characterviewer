(function() {
  angular.module('ndGame')
  	.controller('AbilityCtrl', [
  	'$scope', '$mdToast', '$state', 'AbilityService', 'Utils', 'data', AbilityCtrl
  ]);

  function AbilityCtrl($scope, $mdToast, $state, AbilityService, Utils, data) {
    var root = this;

    root.reset = function() {
      $scope.ability = {};
      $scope.abilityForm.$setPristine();
    }

    $scope.ability = data || {};

    $scope.canRemove = !!$scope.ability._id;

    $scope.save = function() {
      if ($scope.abilityForm.$invalid) {
        return;
      }

      AbilityService.add($scope.ability).then(function(response) {
        Utils.toast('Ability saved')
        root.reset();
      }, function(error) {
        Utils.toast('Could not save ability')
      });
    }

    $scope.remove = function() {
      AbilityService.remove($scope.ability._id).then(function(response) {
        Utils.toast('ability: ' + $scope.ability.name + ' was removed')
        $state.go('viewabilities');
      }, function(error) {
        Utils.toast('ability: ' + $scope.ability.name + ' could not be removed')
      });
    }
  }
})();
