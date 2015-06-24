(function() {
  angular.module('ndGame')
  	.controller('AbilityCtrl', [
  	'$scope', '$mdToast', 'AbilityService', 'Utils', AbilityCtrl
  ]);

  function AbilityCtrl($scope, $mdToast, AbilityService, Utils) {
    var root = this;

    root.reset = function() {
      $scope.ability = {};
      $scope.abilityForm.$setPristine();
    }

    $scope.ability = {};

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
  }
})();
