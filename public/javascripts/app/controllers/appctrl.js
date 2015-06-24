(function() {
  angular.module('ndGame')
  	.controller('AppCtrl', [
  	'$mdSidenav', '$scope', '$mdUtil', '$log', AppCtrl
  ]);

  function AppCtrl($mdSidenav, $scope, $mdUtil, $log) {
    $scope.toggleLeft = buildToggler('left');

    function buildToggler(navID) {
      var debounceFn =  $mdUtil.debounce(function(){
            $mdSidenav(navID)
              .toggle()
          },300);
      return debounceFn;
    }
  }
})();
