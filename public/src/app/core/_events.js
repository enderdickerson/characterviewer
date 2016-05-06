(function() {
  angular
    .module('app.core')
    .constant('_events', {
      notAuthenticated: 'Not authenticated',
      notAuthorized: 'Not authorized',
      sessionTimeout: 'Session timeout'
    });
})();
