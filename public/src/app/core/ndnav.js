(function() {
  angular
    .module('app.core')
  	.directive('ndNav', NdNav);

  function NdNav() {
    return {
      restrict: 'E',
      controller: 'NdNavCtrl',
      templateUrl: 'core/ndnav.html',
      replace: true
    };
  }
})();
