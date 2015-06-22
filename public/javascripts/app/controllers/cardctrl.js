(function() {
  angular.module('ndGame')
  	.controller('CardCtrl', [
  	'$scope', CardCtrl
  ]);

  function CardCtrl($scope) {
    $scope.card = {};
  }
})();
