(function() {
  angular
    .module('app.core')
  	.directive('ndNav', NdNav);

  function NdNav() {
    return {
      restrict: 'E',
      controller: 'NdNavCtrl as vm',
      templateUrl: 'core/ndnav',
      replace: true
    };
  }
})();
