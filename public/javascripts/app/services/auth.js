(function() {
  angular.module('ndGame')
    .service('Auth', [
      '$http', '$window', Auth
    ]);

  function Auth($http, $window) {
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

    root.currentUser = function() {
      if (root.isLoggedIn()) {
        var token = root.getToken();
        var payload = JSON.parse($window.atob(token.split('.')[1]));

        return payload.username;
      }
    };

    root.register = function(user) {
      return $http.post('/data/register', user).then(function(response) {
        root.saveToken(response.data.token);
      });
    };

    root.login = function(user) {
      return $http.post('/data/login', user).then(function(response) {
          root.saveToken(response.data.token);
      });
    };

    root.logout = function(user) {
      $window.localStorage.removeItem('tcgdev-token');
    };
  }
})();
