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
    ngAnnotate: {
      options: {
        singleQuotes: true
      },
      build: {
        files: [
          {
            expand: true,
            src: [
              'public/src/app/**/*.module.js',
              'public/src/app/**/*.config.js',
              'public/src/app/**/*.route.js',
              'public/src/app/**/*.js',
              '!public/src/app/**/*.spec.js'
            ]
          }
        ],
        options: {
          add: true,
          remove: true
        }
      }
    },
    html2js: {
      options: {
        rename: function(moduleName) {
          return moduleName.replace('.html', '').toLowerCase();
        },
        base: 'public/src/app',
        htmlmin: {
          collapseWhitespace: true,
          removeComments: true
        }
      },
      main: {
        src: ['public/src/app/**/*.html'],
        dest: 'public/src/app/templates.js'
      }
    },
    includeSource: {
      options: {
        basePath: 'public/src',
        typeMappings: {
          'ejs': 'html'
        }
      },
      dev: {
        files: {
          'views/index.ejs': 'public/src/templates/dev.html'
        }
      }
    },
    clean: {
      build: ['public/css/*.css']
    },
    stylus: {
      compile: {
        options: {
          'include css': true,
          paths: [
            'public/css/base',
            'public/css/layout',
            'public/css/pages',
            'public/css/vendor',
            'public/src/vendor'
          ],
          compress: false
        },
        files: {
          'public/css/site.css': ['public/css/main.styl']
        }
      }
    },
    watch: {
      stylus: {
        files: ['public/stylesheets/*.styl'],
        tasks: ['stylus:compile']
      }
    },
    wiredep: {
      target: {
        src: 'views/index.ejs',
        ignorePath: '../public/'
      }
    },
    filerev: {
      options: {
        algorithm: 'sha1',
        length: 7
      },
      css: {
        src: 'public/css/site.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-env');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-include-source');
  grunt.loadNpmTasks('grunt-ng-annotate');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-filerev');
  grunt.loadNpmTasks('grunt-html2js');

  grunt.registerTask('build', [
    'clean',
    'stylus:compile',
    'filerev',
    'html2js',
    'ngAnnotate:build',
    'wiredep',
    'includeSource:dev'
  ]);

  grunt.registerTask('local', [
    'clean',
    'env:local',
    'stylus:compile',
    'filerev',
    'html2js',
    'ngAnnotate:build',
    'includeSource:dev',
    'nodemon'
  ]);
};
