(function() {
  charactersService.$inject = ['$http'];
  angular
    .module('app.characters')
    .service('charactersService', charactersService);

  function charactersService($http) {
    var root = this;

    root.allOnline = allOnline;

    function allOnline() {
      return $http.get('data/characters').then(function(result) {

        return result.data;
      }, function(err) {
        console.log('error occurred', err);
      });
    }
  }
})();
