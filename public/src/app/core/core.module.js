(function(){
  angular
    .module('app.core', [
      // vendor
      'ngMaterial',
      'ui.router',
      'ngMessages',
      'angularMoment',
      'btford.socket-io',

      // local
      'templates-main'
    ]);
})();
