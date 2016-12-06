module.exports = function(grunt) {

  // Project configuration.
    
    //SASS
    
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
      /**
 * Set project object
 
project: {
  app: 'app',
  assets: '<%= project.app %>/assets',
  src: '<%= project.assets %>/src',
  css: [
    '<%= project.src %>/scss/style.scss'
  ],
  js: [
    '<%= project.src %>/js/*.js'
  ]
},*/
      
      //Compress js
      
      uglify: {
    my_target: {
      files: {
        'js/script.min.js': ['components/js/*.js']
      }
    }
  },
  
 compass: {                  
    dev:{
        options: {
            config:'config.rb'
      }
    } 
  },
    //Watch task
      watch : {
          options:{ livereload: true },
          scripts:{
             files: ['components/js/*.js'],
             tasks: ['uglify']
         },
          sass:{
                files: ['components/sass/*.scss'],
                tasks: ['compass'] 
             },
             
          html:{
             files: ['*.html']  
          }
      }
      
  });

  
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['watch']);

};