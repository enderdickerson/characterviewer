(function() {
  configMaterial.$inject = ['$mdThemingProvider'];
  angular
    .module('app.core')
    .config(configMaterial);
  
  function configMaterial($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('indigo')
      .accentPalette('lime');

    $mdThemingProvider.theme('docs-dark')
      .primaryPalette('yellow')
      .dark();
  }
})();
