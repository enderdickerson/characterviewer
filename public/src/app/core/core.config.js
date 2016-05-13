(function() {
  configMaterial.$inject = ['$mdThemingProvider'];
  angular
    .module('app.core')
    .config(configMaterial);
  
  function configMaterial($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('grey', {
        'default': '800'
      })
      .accentPalette('red', {
        'default': '600'
      });
  }
})();
