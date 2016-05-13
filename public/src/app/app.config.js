(function() {
  runBlock.$inject = ['$rootScope', '$state'];
  angular
    .module('app')
    .run(runBlock);

  function runBlock($rootScope, $state) {
    $rootScope.$state = $state;
  }
})();
