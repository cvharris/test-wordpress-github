'use strict'

const fs = require('fs')

module.exports = function (grunt) {

  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  require('load-grunt-tasks')(grunt)

  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({
    // compile less stylesheets to css -----------------------------------------
    less: {
      all: {
        src: [
          'node_modules/font-awesome/less/font-awesome.less',
          'node_modules/ui-primer/src/ui-primer.less',
        ],
        dest: 'styles/app.css',
        options: {
          banner: '/*\n DON\'T EDIT THIS FILE SILLY! \n It is generated dynamically. Anything you change here will be lost. \n*/\n',
          compress: true,
          sourceMap: true,
        }
      }
    },

   nunjucks: {
     options: {
       data: "{}",
       paths: ['partials', '/']
     },
     render: {
       files: {
         'index.html': ['partials/main.html']
       }
     }
   },

    connect: {
      server: {
        options: {
          port: 3010,
          livereload: true,
          open: {
            appName: 'Google Chrome'
          }
        },
      },
    },

    // configure watch to auto update ----------------
    watch: {
      index: {
        files: [ 'index.html' ],
        options: {
          livereload: true
        }
      }
    }

  });

  // ============= // CREATE TASKS ========== //
  grunt.registerTask('serve', [ 'less', 'nunjucks', 'connect', 'watch' ])
};
