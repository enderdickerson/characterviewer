(function() {
  angular.module('ndGame')
    .service('CardService', [
      '$http', 'Auth', CardService
    ]);

  function CardService($http, Auth) {
    var root = this;
    root.getAll = function() {
      return $http.get('/data/cards').then(function(response){
        return response.data;
      });
    };

    root.add = function(card) {
      return $http.post('/data/card', card, {
        headers: {Authorization: 'Bearer '+ Auth.getToken()}
      }).then(function(response) {
        return response;
      });
    };

    root.remove = function(id) {
      return $http.post('/data/card/remove', { id: id }, {
        headers: {Authorization: 'Bearer '+ Auth.getToken()}
      }).then(function(response) {
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
