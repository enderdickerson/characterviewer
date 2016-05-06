(function() {
  angular
    .module('app.core')
  	.controller('NdNavCtrl', [
  	'$mdSidenav', '$scope', NdNavCtrl
  ]);

  function NdNavCtrl($mdSidenav, $scope) {
    $scope.$on('$stateChangeSuccess', function(event, toState) {
      $mdSidenav('left').close();
    });
  }
})();
