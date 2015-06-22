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
              .then(function () {
                $log.debug("toggle " + navID + " is done");
              });
          },300);
      return debounceFn;
    }
  }
})();
