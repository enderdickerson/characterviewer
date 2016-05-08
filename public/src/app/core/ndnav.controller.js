(function() {
  NdNavCtrl.$inject = ['$mdSidenav', '$scope', '$state'];
  angular
    .module('app.core')
  	.controller('NdNavCtrl', NdNavCtrl);

  function NdNavCtrl($mdSidenav, $scope, $state) {
    var vm = this;

    vm.goTo = goTo;

    function goTo(state) {
      $state.go(state);
    }

    $scope.$on('$stateChangeSuccess', function(event, toState) {
      $mdSidenav('left').close();
    });
  }
})();
