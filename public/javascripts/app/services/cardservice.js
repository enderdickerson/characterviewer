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
  }
})();
