(function() {
  angular.module('ndGame')
    .service('AuthService', [
      '$http', '$window', 'AuthToken', AuthService
    ]);

  function AuthService($http, $window, AuthToken) {
    var root = this;

    root.register = function(user) {
      return $http.post('/data/register', user).then(function(response) {
        AuthToken.saveToken(response.data.token);
      });
    };

    root.login = function(user) {
      return $http.post('/data/login', user).then(function(response) {
        AuthToken.saveToken(response.data.token);
      });
    };
  }
})();
