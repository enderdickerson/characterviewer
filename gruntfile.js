module.exports = function(grunt) {
grunt.initConfig({
  env : {
    local : {
      NODE_ENV : 'local',
      JWT_SECRET: '38C8E5FD577DEBC43B2EF0E4A7F0624F4C519890E839FCAEA817A1157FB19F45'
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
  wiredep: {
    target: {
      src: 'views/index.ejs',
      ignorePath: '../public/'
    }
  }
});

grunt.loadNpmTasks('grunt-env');
grunt.loadNpmTasks('grunt-nodemon');
grunt.loadNpmTasks('grunt-contrib-stylus');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-wiredep');

grunt.registerTask('build', ['wiredep']);
grunt.registerTask('local', ['env:local', 'nodemon']);
};
