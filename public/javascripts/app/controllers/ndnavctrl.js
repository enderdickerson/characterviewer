(function() {
  angular.module('ndGame')
  	.controller('NdNavCtrl', [
  	'$mdSidenav', '$scope', NdNavCtrl
  ]);

  function NdNavCtrl($mdSidenav, $scope) {
    $scope.$on('$stateChangeSuccess', function(event, toState) {
      $mdSidenav('left').close();
    });
  }
})();
