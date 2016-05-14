angular.module('templates-main', ['characters/characterdetail', 'characters/characters', 'core/ndnav', 'core/ndtoolbar', 'core/pagenotfound']);

angular.module("characters/characterdetail", []).run(['$templateCache', function($templateCache) {
  $templateCache.put("characters/characterdetail",
    "<div><md-card class=\"character-card\"><md-card-title><div layout=\"column\"><div layout=\"row\"><span class=\"md-headline\">{{vm.character.name}}</span><md-icon ng-show=\"vm.character.online\" ng-cloak class=\"md-accent md-hue-1 title-icon\">visibility</md-icon><span class=\"logout-timestamp\" ng-show=\"!vm.character.online\">{{ vm.character.lastLogin.fromNow() }}</span></div><div layout=\"row\"><span>{{vm.character.level}} {{vm.character.race}}&nbsp;</span> <span class=\"{{vm.character.class.toLowerCase()}}-class-color\">{{vm.character.class}}</span></div></div></md-card-title><md-card-content><p>Money: {{vm.character.moneyDisplay}}</p><p>Total time: {{vm.character.totalTimeDisplay}}</p><p>Time at level: {{vm.character.timeAtLevelDisplay}}</p></md-card-content></md-card><div><md-progress-linear class=\"xp-progress md-whiteframe-1dp no-animation\" ng-class=\"{'rested': vm.character.is_logout_resting === 1}\" md-mode=\"buffer\" value=\"{{vm.character.xpProgress}}\" md-buffer-value=\"{{vm.character.restedProgress}}\" ng-show=\"vm.character.level !== 70\"></md-progress-linear><md-tooltip md-direction=\"top\">{{vm.character.xp}} / {{vm.character.xpTotal}}: {{vm.character.xpToLevel}} left</md-tooltip></div><md-grid-list md-cols=\"9\" md-cols-sm=\"6\" md-cols-xs=\"3\" md-cols-md=\"9\" md-cols-gt-md=\"9\" md-cols-lg=\"9\" md-cols-gt-lg=\"18\" md-row-height=\"1:1\" md-gutter-gt-md=\"8px\" md-gutter-md=\"8px\" md-gutter=\"4px\" class=\"equipment-list\"><md-grid-tile ng-repeat=\"item in vm.character.equipped\" class=\"md-whiteframe-1dp\"><a href=\"//www.wowhead.com/item={{item.item}}\" ng-show=\"item.item !== '0'\" class=\"equipment-item-no-text\"><span class=\"slot-text\">{{item.slot}}</span></a> <span ng-show=\"item.item === '0'\" class=\"equipment-item-no-text\"><span class=\"slot-text\">{{item.slot}}</span></span></md-grid-tile></md-grid-list></div>");
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
