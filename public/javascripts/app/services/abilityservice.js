(function() {
  angular.module('ndGame')
    .service('AbilityService', [
      '$http', AbilityService
    ]);

  function AbilityService($http) {
    var root = this;
    root.getAll = function() {
      return $http.get('/data/abilities').then(function(response){
        return response.data;
      });
    };

    root.add = function(ability) {
      return $http.post('/data/ability', ability).then(function(response) {
        return response;
      });
    };

    root.remove = function(id) {
      return $http.post('/data/ability/remove', {id: id} ).then(function(response) {
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
