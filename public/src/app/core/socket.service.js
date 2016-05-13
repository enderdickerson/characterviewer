(function() {
  socket.$inject = ['socketFactory'];
  angular
    .module('app.core')
    .service('socket', socket);

  function socket(socketFactory) {
    return socketFactory();
  }
})();