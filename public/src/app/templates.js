angular.module('templates-main', ['characters/characterdetail', 'characters/characters', 'core/ndnav', 'core/ndtoolbar', 'core/pagenotfound']);

angular.module("characters/characterdetail", []).run(['$templateCache', function($templateCache) {
  $templateCache.put("characters/characterdetail",
    "<div><md-card class=\"character-card\"><md-card-title><span class=\"md-headline\">{{vm.character.name}}</span></md-card-title><md-card-content><p>Level: {{vm.character.level}}</p><p>Race: {{vm.character.race}}</p><p>Class: {{vm.character.class}}</p><p>Gender: {{vm.character.gender}}</p><p>XP: {{vm.character.xp}}</p><p>Money: {{vm.character.moneyDisplay}}</p><p>Total time: {{vm.character.totalTimeDisplay}}</p><p>Time at level: {{vm.character.timeAtLevelDisplay}}</p><p>Rested: {{vm.character.is_logout_resting === 1 ? 'yes' : 'no'}}</p></md-card-content></md-card><md-card class=\"equipment-card\"><md-card-content><p ng-repeat=\"item in vm.character.equipped\"><span>{{item.slot}}:</span> <a href=\"//www.wowhead.com/item={{item.item}}\" ng-show=\"item.item !== '0'\" class=\"equipment-item\">[{{item.item}}]</a> <span ng-show=\"item.item === '0'\">nothing</span></p></md-card-content></md-card></div>");
}]);

angular.module("characters/characters", []).run(['$templateCache', function($templateCache) {
  $templateCache.put("characters/characters",
    "<div layout=\"column\"><div flex style=\"margin-right: 8px\"><md-list><md-list-item ng-repeat=\"character in vm.characters\" class=\"character-list md-2-line\"><md-card class=\"md-whiteframe-1dp clickable click-hover\" ng-click=\"vm.goTo(character.name)\"><md-card-content><span class=\"md-title online-{{character.online}}\" ng-bind=\"character.name\"></span><md-icon ng-show=\"character.online\" ng-cloak class=\"md-accent md-hue-1 title-icon\">visibility</md-icon><span class=\"logout-timestamp\" ng-show=\"!character.online\">{{ character.lastLogin.fromNow() }}</span><p style=\"margin-top: 8px\">{{character.level}} {{character.race}} <span class=\"{{character.class.toLowerCase()}}-class-color\">{{character.class}}</span></p></md-card-content></md-card></md-list-item></md-list></div></div>");
}]);

angular.module("core/ndnav", []).run(['$templateCache', function($templateCache) {
  $templateCache.put("core/ndnav",
    "<md-sidenav class=\"md-sidenav-left md-whiteframe-z2\" md-component-id=\"left\" md-is-locked-open=\"$mdMedia('gt-md')\"><md-button class=\"sidenav-link\" ng-click=\"vm.goTo('root.characters')\"><div class=\"inset\"><md-icon>face</md-icon><span class=\"text\">Who's online</span></div></md-button></md-sidenav>");
}]);

angular.module("core/ndtoolbar", []).run(['$templateCache', function($templateCache) {
  $templateCache.put("core/ndtoolbar",
    "<md-toolbar layout=\"row\"><div class=\"md-toolbar-tools\"><md-button ng-click=\"toggleLeft()\" class=\"md-icon-button\"><md-icon aria-label=\"Menu\" class=\"material-icons\">menu</md-icon></md-button><h1 id=\"app_title\" class=\"nd-accent clickable\" ui-sref=\"root.characters\">WoW Viewer</h1><h1>{{ $state.current.data.pageTitle || '' }}</h1><span flex></span></div></md-toolbar>");
}]);

angular.module("core/pagenotfound", []).run(['$templateCache', function($templateCache) {
  $templateCache.put("core/pagenotfound",
    "<md-content><h2>Oh uh. Page not found.</h2></md-content>");
}]);
