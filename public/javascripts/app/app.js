angular
  .module('tcgApp', ['ngMaterial', 'ndGame'])
  .config(function($mdThemingProvider){
    $mdThemingProvider.theme('default')
        .primaryPalette('indigo')
        .accentPalette('lime');
  });