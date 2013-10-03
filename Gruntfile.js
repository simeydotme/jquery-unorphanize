/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    
    // Task configuration.

    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: 'unorphanize.jquery.js',
        dest: 'unorphanize.jquery.min.js'
      }
    },
    
    jshint: {
      options: {
        "boss": true,
        "curly": true,
        "eqeqeq": true,
        "eqnull": true,
        "expr": true,
        "immed": true,
        "noarg": true,
        "onevar": true,
        "quotmark": "double",
        "smarttabs": true,
        "trailing": true,
        "undef": true,
        "unused": true,
        "globals": {
          jQuery: false,
          $: false
        }
      },
      lib_test: {
        src: ['unorphanize.jquery.js']
      }
    }

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task.
  grunt.registerTask('default', ['jshint', 'uglify']);

};
