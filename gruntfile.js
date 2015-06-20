module.exports = function(grunt) {

grunt.loadNpmTasks('grunt-env');
grunt.loadNpmTasks('grunt-nodemon');

grunt.initConfig({
  env : {
    dev : {
      NODE_ENV : 'dev'
    },
    local : {
      NODE_ENV : 'local'
    }
  },
  nodemon: {
    dev: {
      script: 'app.js',
      options: {
        nodeArgs: ['--debug'],
        env: {
          PORT: '5455'
        }
      }
    }
  }
});

grunt.registerTask('dev', ['env:dev', 'nodemon']);
grunt.registerTask('local', ['env:local', 'nodemon']);
};
