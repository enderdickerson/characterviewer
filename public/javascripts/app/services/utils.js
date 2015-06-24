(function() {
  angular.module('ndGame')
    .service('Utils', [
      '$mdToast', Utils
    ]);

  function Utils($mdToast) {
    var root = this;

    root.toast = function(msg) {
      $mdToast.show(
        $mdToast.simple()
          .content(msg)
          .position('bottom left')
          .hideDelay(3000)
      );
    };
  }
})();
