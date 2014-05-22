/**
 * Module Build
 *
 * @todo Add mocha tests.
 *
 * @version 1.0.0
 * @author potanin@UD
 * @param grunt
 */
module.exports = function( grunt ) {

  // Project configuration.
  grunt.initConfig( {

    pkg: grunt.file.readJSON( 'package.json' ),

    yuidoc: {
      compile: {
        name: '<%= pkg.name %>',
        description: '<%= pkg.description %>',
        version: '<%= pkg.version %>',
        url: '<%= pkg.homepage %>',
        logo: 'http://media.usabilitydynamics.com/logo.png',
        options: {
          paths: [ "./lib" ],
          outdir: './static/codex'
        }
      }
    },

    jscoverage: {
      options: {
        inputDirectory: 'lib',
        outputDirectory: './static/lib-cov',
        highlight: true
      }
    }

  });

  grunt.loadNpmTasks( 'grunt-markdown' );
  grunt.loadNpmTasks( 'grunt-jscoverage' );
  grunt.loadNpmTasks( 'grunt-contrib-yuidoc' );

  // Update Documentation
  grunt.registerTask( 'doc', [ 'yuidoc' ] );

  // Run Tets.
  grunt.registerTask( 'test', [] );

};
