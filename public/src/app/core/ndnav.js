(function() {
  angular.module('ndGame')
  	.directive('ndNav', [
      NdNav
  ]);

  function NdNav() {
    return {
      restrict: 'E',
      controller: 'NdNavCtrl',
      templateUrl: '/partials/ndnav.html',
      replace: true
    };
  }
})();
