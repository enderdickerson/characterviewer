module.exports = function(grunt) {
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
  },
  stylus: {
    compile: {
      options: {
        paths: ['public/stylesheets/*.styl']
      },
      files: {
        'public/stylesheets/site.css': ['public/stylesheets/*.styl']
      }
    }
  },
  watch: {
    stylus: {
      files: ['public/stylesheets/*.styl'],
      tasks: ['stylus:compile']
    },
  },
});

grunt.loadNpmTasks('grunt-env');
grunt.loadNpmTasks('grunt-nodemon');
grunt.loadNpmTasks('grunt-contrib-stylus');
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.registerTask('dev', ['env:dev', 'nodemon']);
grunt.registerTask('local', ['env:local', 'nodemon']);
};
