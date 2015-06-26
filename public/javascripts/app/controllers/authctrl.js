(function() {
  angular.module('ndGame')
  	.controller('AuthCtrl', [
  	'$scope', '$state', 'Auth', 'Utils', AuthCtrl
  ]);

  function AuthCtrl($scope, $state, Auth, Utils) {
    var root = this;

    $scope.user = {};

    $scope.register = function() {
      Auth.register($scope.user).then(function(response) {
        $state.go('landing');
      }, function(err) {
        Utils.simpleDialog('Register failed', err);
      });
    };

    $scope.login = function() {
      Auth.login($scope.user).then(function(response) {
        $state.go('landing');
      }, function(err) {
        // $scope.error = err;
        Utils.simpleDialog('Login failed', err);
      });
    };
  }
})();
