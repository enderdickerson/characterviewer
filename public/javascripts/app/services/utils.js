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

    root.simpleDialog = function(title, msg, actionText) {
      $mdDialog.show(
        $mdDialog.alert()
          .parent(angular.element(document.body))
          .title(title || 'Alert')
          .content(msg)
          .ariaLabel('Alert')
          .ok(actionText || 'Ok')
      );
    };
  }
})();
