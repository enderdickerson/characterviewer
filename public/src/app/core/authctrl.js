(function() {
  angular
    .module('app.core')
  	.controller('AuthCtrl', [
  	'$q', '$scope', '$state', '$mdDialog', 'AuthService', 'Utils', AuthCtrl
  ]);

  function AuthCtrl($q, $scope, $state, $mdDialog, AuthService, Utils) {
    var root = this;

    $scope.user = {};

    $scope.register = function() {
      AuthService.register($scope.user).then(function(response) {
        $state.go('landing');
      }, function(err) {
        Utils.simpleDialog('Register failed', err);
      });
    };

    $scope.login = function() {
      if (!$scope.user.username || !$scope.user.password) {
        return;
      }

      AuthService.login($scope.user).then(function(response) {
        $mdDialog.hide();
        $state.reload();
      }, function(err) {
        $scope.error = err;
      });
    };
  }
})();
