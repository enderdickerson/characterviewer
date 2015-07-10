(function() {
  angular.module('ndGame')
  	.controller('AppCtrl', [
  	'$mdSidenav', '$mdDialog', '$scope', '$rootScope', '$mdUtil', '_events', AppCtrl
  ]);

  function AppCtrl($mdSidenav, $mdDialog, $scope, $rootScope, $mdUtil, _events) {
    $scope.toggleLeft = buildToggler('left');

    function buildToggler(navID) {
      var debounceFn =  $mdUtil.debounce(function(){
            $mdSidenav(navID)
              .toggle()
          },300);
      return debounceFn;
    }

    $scope.showUnauthorized = function() {
      $mdDialog.show(
        $mdDialog.alert()
          .parent(angular.element(document.body))
          .title('You can\'t do that')
          .content('Not enough user power')
          .ariaLabel('Alert insufficient roles')
          .ok('Got it')
      );
    };

    $scope.showLogin = function() {
      $mdDialog.show({
        controller: 'AuthCtrl',
        templateUrl: 'partials/login.html',
        parent: angular.element(document.body)
      });
    };

    $rootScope.$on(_events.notAuthorized, function() {
      $scope.showUnauthorized();
    });

    $rootScope.$on(_events.notAuthenticated, function() {
      $scope.showLogin();
    });

    $rootScope.$on(_events.sessionTimeout, function() {
      $scope.showLogin();
    });
  }
})();
