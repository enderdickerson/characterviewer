(function() {
  angular.module('ndGame')
    .service('AuthToken', [
      '$window', AuthToken
    ]);

  function AuthToken($window) {
    var root = this;

    root.saveToken = function (token) {
      $window.localStorage['tcgdev-token'] = token;
    };

    root.getToken = function () {
      return $window.localStorage['tcgdev-token'];
    };

    root.isLoggedIn = function() {
      var token = root.getToken();

      if (token) {
        var payload = JSON.parse($window.atob(token.split('.')[1]));

        return payload.exp > Date.now() / 1000;
      } else {
        return false;
      }
    };

    root.roles = function() {
      if (root.isLoggedIn()) {
        var token = root.getToken();
        var payload = JSON.parse($window.atob(token.split('.')[1]));

        return payload.roles;
      }
    }

    root.isAdmin = function() {
      if (!root.roles()){
        return false;
      }

      return root.roles().indexOf('admin') > -1;
    };

    root.currentUser = function() {
      if (root.isLoggedIn()) {
        var token = root.getToken();
        var payload = JSON.parse($window.atob(token.split('.')[1]));

        return payload.username;
      }
    };

    // root.header = {
    //   headers: { Authorization: 'Bearer '+ root.getToken()}
    // };

    root.logout = function(user) {
      $window.localStorage.removeItem('tcgdev-token');
    };
  }
})();
