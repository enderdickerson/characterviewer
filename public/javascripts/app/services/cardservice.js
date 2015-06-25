(function() {
  angular.module('ndGame')
    .service('CardService', [
      '$http', CardService
    ]);

  function CardService($http) {
    var root = this;
    root.getAll = function() {
      return $http.get('/data/cards').then(function(response){
        return response.data;
      });
    };

    root.add = function(card) {
      return $http.post('/data/card', card).then(function(response) {
        return response;
      });
    };

    root.remove = function(id) {
      return $http.post('/data/card/remove', { id: id }).then(function(response) {
        return response;
      });
    };

    root.get = function(id) {
      return $http.get('/data/cards/' + id).then(function(response) {
        return response.data;
      });
    };
  }
})();
