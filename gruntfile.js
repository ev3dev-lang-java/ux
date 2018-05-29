module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        webFolder: 'docs',

        sass: {
            options: {
                outputStyle: 'compressed',
                sourceMap: false
            },
            all: {
                files: {
                   "<%= webFolder %>/css/custom.css": "src/sass/custom.scss",
               }

            }
        },

        uglify: {
            srcjs: {
                files: [{expand: true, cwd: 'src/js/core', src: '**.js', dest: '<%= webFolder %>/js/core/'}]
            }
        },

        connect: {
            server: {
              options: {
                hostname: '*',
                livereload: true,
                open: {
                    target: 'http://127.0.0.1:8000'
                },
                port: 8000,
                useAvailablePort: true,
                base: '<%= webFolder %>',
              }
            }
          },



        copy: {

            libassets: {
                files: [{expand: true, cwd: 'src/assets', src: '**/*', dest: '<%= webFolder %>/assets'}]
            },
            jsComponent:{
               files: [{expand: true, cwd: 'src/js/component', src: '**/*', dest: '<%= webFolder %>/js/component'}]
            },
            jsLib:{
               files: [{expand: true, cwd: 'src/js/lib', src: '**/*', dest: '<%= webFolder %>/js/lib'}]
            }
        },
        clean: {
            options: {force:true},
            folderJs:{
              src:['<%= webFolder %>/js/*']
            },

            folderAssets:{
              src:['<%= webFolder %>/assets/*']
            }
        },

        watch: {
            options: {
              livereload: true,
            },
            gruntfile: {files: ['Gruntfile.js'], tasks: ['default']},
            sass: { files: ["src/sass/**/*.scss"], tasks: ["sass"] },
            jsCore: {files: ['src/js/core/**.js'], tasks: ['uglify:srcjs']},
            libassets: {files: ['src/assets/**/*'], tasks: ['clean:folderAssets','copy:libassets']},
            jsComponent: {files: ['src/js/component/**'], tasks: ['copy:jsComponent']},
            jsLib: {files: ['src/js/lib/**'], tasks: ['copy:jsLib']}
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-connect');

    //Do not add watch to "default" task
    grunt.registerTask('default', ['sass', 'uglify']);

    grunt.registerTask('monitor', ['connect','sass','uglify', 'copy:libassets','copy:jsComponent','copy:jsLib','watch']);

    // // solo para desarrollo
    grunt.registerTask('dev', ['sass']);



};
