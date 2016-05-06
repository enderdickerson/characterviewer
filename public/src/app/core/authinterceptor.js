(function() {
  angular
    .module('app.core')
    .service('AuthInterceptor', [
      '$q', '$rootScope', 'AuthToken', '_events', AuthInterceptor
    ]);

function AuthInterceptor($q, $rootScope, AuthToken, _events) {
  var root = this;

  root.request = function(config) {
    var token = AuthToken.getToken();
    config.headers = config.headers || {};

    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }

    return config || $q.when(config);
  };

  root.responseError = function(response) {
    var matchesAuthenticatePath = response.config
      && (response.config.url.match(new RegExp('/data/login'))
      || response.config.url.match(new RegExp('/data/register')));
    if (!matchesAuthenticatePath) {
      $rootScope.$broadcast({
        401: _events.notAuthenticated,
        403: _events.notAuthorized,
        419: _events.sessionTimeout
      }[response.status], response);
    }
    return $q.reject(response);
  }
}

})();
