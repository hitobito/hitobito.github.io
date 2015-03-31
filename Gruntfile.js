// Generated on 2014-10-29 using generator-angular 0.9.5
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('assemble' );

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Configurable paths for the application
  var appConfig = {
    src: 'src',
    dist: 'public'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: appConfig,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      js: {
        files: ['<%= yeoman.src %>/scripts/{,*/}*.js'],
        tasks: ['newer:jshint:all'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      sass: {
        files: ['<%= yeoman.src %>/styles/{,*/}*.{scss,sass}'],
        tasks: ['sass']
      },
      assemble: {
        files: ['<%= yeoman.src %>/**/*.hbs', '<%= yeoman.src %>/**/*.json'],
        tasks: ['assemble']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.dist %>/{,*/}*.html',
          '<%= yeoman.dist %>/{,*/}*.css',
          '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729,
        base: 'public'
      },
      livereload: {
        options: {
          open: true
        }
      },
      dist: {
        options: {
          open: true,
          base: '<%= yeoman.dist %>'
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish'),
        force: true
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.src %>/scripts/{,*/}*.js'
        ]
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/{,*/}*.js']
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/{,*/}*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    // Compiles Sass to CSS and generates necessary files if requested
    sass: {
      options: {
        compass: true,
        bundleExec: true
      },
      dist: {
        options: {
          style: 'compressed'
        },
        files: [
          {'<%= yeoman.dist %>/styles/main.css': '<%= yeoman.src %>/styles/main.scss'},
          {'<%= yeoman.dist %>/styles/ie.css': '<%= yeoman.src %>/styles/ie.scss'},
          {'<%= yeoman.dist %>/styles/print.css': '<%= yeoman.src %>/styles/print.scss'}
        ]
      }
    },

    assemble: {
      options: {
        flatten: true,
        layout: '<%= yeoman.src %>/template/layout.hbs',
        data: '<%= yeoman.src %>/data/**/*.json',
        partials: '<%= yeoman.src %>/partials/*.hbs',
      },
      dist: {
        options:{
          plugins: ['assemble-contrib-permalinks'],
          permalinks: {
            structure: ':language/index.html'
          }
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.src %>/pages/',
          src: ['*.hbs'],
          dest: '<%= yeoman.dist %>/'
        }]
      },
      home: {
        files: {'<%= yeoman.dist %>/index.html': '<%= yeoman.src %>/index.hbs'}
      }
    },

    // Renames files for browser caching purposes
    filerev: {
      dist: {
        src: [
          '<%= yeoman.dist %>/scripts/{,*/}*.js',
          '<%= yeoman.dist %>/styles/{,*/}*.css',
          '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= yeoman.dist %>/styles/fonts/*'
        ]
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= yeoman.src %>/index.html',
      options: {
        dest: '<%= yeoman.dist %>',
      }
    },

    // Performs rewrites based on filerev and the useminPrepare configuration
    usemin: {
      html: ['<%= yeoman.dist %>/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/styles/{,*/}*.css']
    },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.src %>/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: ['*.html', 'views/{,*/}*.html'],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.src %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            '*.html',
            'views/{,*/}*.html',
            'images/{,*/}*.{webp,svg}',
            'styles/fonts/*'
          ]
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= yeoman.dist %>/images',
          src: ['generated/*']
        }, {
          expand: true,
          cwd: '<%= yeoman.src %>',
          dest: '<%= yeoman.dist %>',
          src: ['javascripts/**/*.js']
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= yeoman.src %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'sass',
        'copy:dist',
        'imagemin',
        'assemble'
      ],
      test: [
        'sass'
      ],
      dist: [
        'sass',
        'imagemin',
        'assemble'
      ]
    },
  });


  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'concurrent:server',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve:' + target]);
  });

  grunt.registerTask('build', [
    'clean:dist',
    'concurrent:dist',
    'autoprefixer',
    'copy:dist',
    'assemble',
    'htmlmin'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'build'
  ]);
};
