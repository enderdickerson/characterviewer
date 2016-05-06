(function() {
  angular
    .module('app.core')
    .directive('ndToolbar', ndToolbar);

  function ndToolbar() {
    return {
      restrict: 'E',
      scope: false,
      templateUrl: 'core/ndtoolbar',
      replace: true
    }
  }
})();