(function() {
  angular.module('ndGame')
  	.controller('AppCtrl', [
  	'$mdSidenav', '$scope', AppCtrl
  ]);

  function AppCtrl($mdSidenav, $scope) {
  	$scope.hello = 'clair';
  }
})();