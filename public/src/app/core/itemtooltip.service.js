(function() {
  itemTooltipService.$inject = ['$window'];
  angular
    .module('app.core')
    .service('itemTooltipService', itemTooltipService);

  function itemTooltipService($window) {
    var root = this;

    root.refresh = function() {
      if (!$window.$WowheadPower) {
        return;
      }

      $window.$WowheadPower.refreshLinks();
    }
  }
})();