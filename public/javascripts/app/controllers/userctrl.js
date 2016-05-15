(function() {
  angular.module('ndGame')
  	.controller('UserCtrl', [
  	'$scope', 'Utils', 'UserService', 'data', UserCtrl
  ]);

  function UserCtrl($scope, UserService, data) {
    var root = this;

    if (data) {
      $scope.user = data;
    }

    $scope.remove = function() {
      UserService.remove($scope.user._id).then(function(response) {
        Utils.toast('User ' + $scope.user.name + ' was removed')
        $state.go('users', null, { reload: true });
      }, function(error) {
        Utils.toast('User ' + $scope.user.name + ' could not be removed')
      });
    }
  }
})();
