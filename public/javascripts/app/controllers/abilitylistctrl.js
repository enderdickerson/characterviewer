(function() {
  angular.module('ndGame')
  	.controller('AbilityListCtrl', [
  	'$scope', 'AbilityService', 'Utils', AbilityListCtrl
  ]);

  function AbilityListCtrl($scope, AbilityService, Utils) {
    AbilityService.getAll().then(function(response) {
      $scope.abilities = response;
    });

    $scope.remove = function(ability) {
      AbilityService.remove(ability).then(function(response) {
        Utils.toast('ability: ' + ability.name + ' was removed')
      }, function(error) {
        Utils.toast('ability: ' + ability.name + ' could not be removed')
      });
    }
  }
})();
