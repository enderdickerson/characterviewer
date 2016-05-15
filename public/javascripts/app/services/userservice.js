(function() {
  angular.module('ndGame')
    .service('UserService', [
      '$http', UserService
    ]);

  function UserService($http) {
    var root = this;
    root.all = function() {
      return $http.get('/data/users').then(function(response){
        return response.data;
      });
    };

    root.get = function(id) {
      return $http.get('/data/users/' + id).then(function(response) {
        return response.data;
      });
    };
  }
})();
