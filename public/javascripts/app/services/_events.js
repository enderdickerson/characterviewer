(function() {
  angular.module('ndGame')
    .constant('_events', {
      notAuthenticated: 'Not authenticated',
      notAuthorized: 'Not authorized',
      sessionTimeout: 'Session timeout'
    });
})();
