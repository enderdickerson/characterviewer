angular.module('templates-main', ['core/admin', 'core/landing', 'core/login/login', 'core/login/register', 'core/ndnav', 'core/ndtoolbar', 'core/pagenotfound']);

angular.module("core/admin", []).run(['$templateCache', function($templateCache) {
  $templateCache.put("core/admin",
    "<md-content layout-padding><md-grid-list md-cols-gt-md=\"8\" md-cols-sm=\"2\" md-cols-md=\"4\" md-row-height-gt-md=\"1:1\" md-row-height=\"1:1\" md-gutter-gt-md=\"16px\" md-gutter-gt-sm=\"8px\" md-gutter=\"4px\"><md-grid-tile class=\"clickable\" md-colspan-gt-sm=\"2\" md-rowspan-gt-sm=\"2\" ng-repeat=\"option in adminMenu\" ng-class=\"[ option.color ]\" ui-sref=\"{{ option.link }}\"><md-icon class=\"material-icons tile-icon\">{{ option.icon }}</md-icon><md-grid-tile-footer><h3>{{ option.text }}</h3></md-grid-tile-footer></md-grid-tile></md-grid-list></md-content>");
}]);

angular.module("core/landing", []).run(['$templateCache', function($templateCache) {
  $templateCache.put("core/landing",
    "<h2>Who's online</h2>");
}]);

angular.module("core/login/login", []).run(['$templateCache', function($templateCache) {
  $templateCache.put("core/login/login",
    "<md-dialog><form name=\"loginForm\"><md-toolbar><div class=\"md-toolbar-tools\"><h2>Please login to continue</h2><span flex></span><md-button class=\"md-icon-button\" ng-click=\"$mdDialog\"><md-icon aria-label=\"Close dialog\"></md-icon></md-button></div></md-toolbar><md-dialog-content><md-input-container><label>Username</label><input ng-model=\"user.username\" name=\"username\" required></md-input-container><md-input-container><label>Password</label><input type=\"password\" required ng-model=\"user.password\" name=\"password\"></md-input-container><p ng-if=\"error\">Incorrect username or password. Please try again.</p><div layout=\"row\"><md-button class=\"md-raised md-primary\" aria-label=\"Register\" ng-click=\"$state.go('register')\" flex><md-icon>person_add</md-icon><span class=\"form-action\">Sign up</span></md-button><md-button class=\"md-raised md-primary\" aria-label=\"Login\" ng-click=\"login()\" flex><md-icon>lock</md-icon><span class=\"form-action\">Login</span></md-button></div></md-dialog-content></form></md-dialog>");
}]);

angular.module("core/login/register", []).run(['$templateCache', function($templateCache) {
  $templateCache.put("core/login/register",
    "<md-content layout-padding layout=\"column\" layout-sm=\"column\"><form name=\"registerForm\"><md-input-container><label>Username</label><input md-maxlength=\"40\" required ng-model=\"user.username\" name=\"username\"><div ng-messages=\"registerForm.username.$error\" ng-show=\"registerForm.username.$touched\"><div ng-message=\"required\">This is required.</div><div ng-message=\"md-maxlength\">The name has to be less than 40 characters long.</div></div></md-input-container><md-input-container><label>Password</label><input type=\"password\" md-maxlength=\"40\" required ng-model=\"user.password\" name=\"password\"><div ng-messages=\"registerForm.password.$error\" ng-show=\"registerForm.password.$touched\"><div ng-message=\"required\">This is required.</div><div ng-message=\"md-maxlength\">The name has to be less than 40 characters long.</div></div></md-input-container></form></md-content><section layout=\"row\"><md-button class=\"md-raised md-primary\" aria-label=\"Register\" ng-click=\"register()\"><md-icon>person_add</md-icon><span class=\"form-action\">Register</span></md-button></section>");
}]);

angular.module("core/ndnav", []).run(['$templateCache', function($templateCache) {
  $templateCache.put("core/ndnav",
    "<md-sidenav class=\"md-sidenav-left md-whiteframe-z2\" md-component-id=\"left\"><md-toolbar class=\"md-hue-3\"><div layout layout=\"column\"></div></md-toolbar></md-sidenav>");
}]);

angular.module("core/ndtoolbar", []).run(['$templateCache', function($templateCache) {
  $templateCache.put("core/ndtoolbar",
    "<md-toolbar layout=\"row\"><div class=\"md-toolbar-tools\"><md-button ng-click=\"toggleLeft()\" class=\"md-icon-button\"><md-icon aria-label=\"Menu\" class=\"material-icons\">menu</md-icon></md-button><h1 id=\"app_title\" class=\"nd-accent\" ui-sref=\"landing\">WoW Viewer</h1><h1>{{ $state.current.data.pageTitle || '' }}</h1><span flex></span></div></md-toolbar>");
}]);

angular.module("core/pagenotfound", []).run(['$templateCache', function($templateCache) {
  $templateCache.put("core/pagenotfound",
    "<md-content><h2>Oh uh. Page not found.</h2></md-content>");
}]);
