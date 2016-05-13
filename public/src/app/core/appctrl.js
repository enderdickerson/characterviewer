(function() {
  AppCtrl.$inject = ['$mdSidenav', '$scope', '$mdUtil'];
  angular
    .module('app.core')
  	.controller('AppCtrl', AppCtrl);

  function AppCtrl($mdSidenav, $scope, $mdUtil) {
    $scope.toggleLeft = buildToggler('left');

    function buildToggler(navID) {
      var debounceFn =  $mdUtil.debounce(function(){
            $mdSidenav(navID)
              .toggle();
          },300);
      return debounceFn;
    }
  }
})();
