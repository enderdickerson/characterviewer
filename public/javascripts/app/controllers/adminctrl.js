(function() {
  angular.module('ndGame')
  	.controller('AdminCtrl', [
  	'$scope', '$state', AdminCtrl
  ]);

  function AdminCtrl($scope, $state) {
    var root = this;

    root.menuItem = function(text, link, icon, color) {
      return {
        link: link,
        text: text,
        icon: icon,
        color: color
      };
    };

    $scope.adminMenu = [
      root.menuItem('Cards', 'cards', 'assignment_ind', 'nd-blue'),
      root.menuItem('Abilities', 'viewabilities', 'blur_circular', 'nd-purple'),
      root.menuItem('Users', 'users', 'group', 'nd-green')
      // root.menuItem('Add card', 'cards.edit', 'create', 'nd-red'),
      // root.menuItem('Add ability', 'editability', 'games', 'nd-green')
    ];
  }
})();
