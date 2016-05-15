(function() {
  angular.module('ndGame')
  	.controller('UserListCtrl', [
  	'$scope', 'UserService', 'data', UserListCtrl
  ]);

  function UserListCtrl($scope, UserService, data) {
    var root = this;

    if (data) {
      $scope.users = data;
    }
  }
})();
