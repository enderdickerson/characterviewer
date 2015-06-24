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
      return $http.post('/data/abilities', ability).then(function(response) {
        return response;
      });
    };

    root.remove = function(ability) {
      return $http.post('/data/abilities/remove', ability).then(function(response) {
        return response;
      });
    };
  }
})();
