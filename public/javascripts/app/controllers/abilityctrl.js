(function() {
  angular.module('ndGame')
  	.controller('AbilityCtrl', [
  	'$scope', '$mdToast', '$stateParams', 'AbilityService', 'Utils', 'data', AbilityCtrl
  ]);

  function AbilityCtrl($scope, $mdToast, $stateParams, AbilityService, Utils, data) {
    var root = this;

    root.reset = function() {
      $scope.ability = {};
      $scope.abilityForm.$setPristine();
    }

    $scope.ability = data || {};

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
