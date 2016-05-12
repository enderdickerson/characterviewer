(function(){
  angular
    .module('app.core', [
      // vendor
      'ngMaterial',
      'ui.router',
      'ngMessages',
      'angularMoment',

      // feature areas
      'app.core.login',

      // local
      'templates-main'
    ]);
})();
