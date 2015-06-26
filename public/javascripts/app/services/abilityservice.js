(function() {
  angular.module('ndGame')
    .service('AbilityService', [
      '$http', 'Auth', AbilityService
    ]);

  function AbilityService($http, Auth) {
    var root = this;
    root.getAll = function() {
      return $http.get('/data/abilities').then(function(response){
        return response.data;
      });
    };

    root.add = function(ability) {
      return $http.post('/data/ability', ability, {
        headers: {Authorization: 'Bearer '+ Auth.getToken()}
      }).then(function(response) {
        return response;
      });
    };

    root.remove = function(id) {
      return $http.post('/data/ability/remove', {id: id}, {
        headers: {Authorization: 'Bearer '+ Auth.getToken()}
      }).then(function(response) {
        return response;
      });
    };

    root.get = function(id) {
      return $http.get('/data/abilities/' + id).then(function(response) {
        return response.data;
      });
    };
  }
})();
