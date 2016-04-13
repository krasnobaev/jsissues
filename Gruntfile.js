/*!
 * This file is part of Flocking UI5 Playground
 * Copyright (C) 2016 Aleksey Krasnobaev <alekseykrasnobaev@gmail.com>
 *
 * You should have received a copy of the GNU General Public License
 * version 3 along with this program.
 * If not, see <http://www.gnu.org/licenses/>.
 */

'use strict';
module.exports = function (grunt) {
  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    /* vars */

    pkg: grunt.file.readJSON('package.json'),
    githash: {main: {}},
    dir: {
      src: 'src'
    },

    /* build */

    concurrent: {
      options: {
        logConcurrentOutput: true,
      },
      run: [
        'watch',
      ],
    },

    jscs: {
      src: ['src/**', 'test/**'],
      options: {
        config: '.jscsrc',
        verbose: true,
        fix: false,
      },
    },

    /* test */

    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          clearRequireCache: true,
        },
        src: ['test/**/*.js'],
      },
    },

    watch: {
      js: {
        options: {
          spawn: false,
        },
        files: ['test/**/*.js', 'src/**/*.js'],
        tasks: ['default'],
      },
    },

  });

  /* test */

  grunt.registerTask('test', [
    'jscs',                             // js linter checks
    'mochaTest',
  ]);

  // On watch events, if the changed file is a test file then configure mochaTest to only
  // run the tests from that file. Otherwise run all the tests
  var defaultTestSrc = grunt.config('mochaTest.test.src');
  grunt.event.on('watch', function (action, filepath) {
    grunt.config('mochaTest.test.src', defaultTestSrc);
  });

  grunt.registerTask('default', 'test');

};
