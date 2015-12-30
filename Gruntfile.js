'use strict';
module.exports = function (grunt) {
    // Load all grunt tasks
    require('load-grunt-tasks')(grunt);
    // Show elapsed time at the end
    require('time-grunt')(grunt);

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/* <%= pkg.name %> | version <%= pkg.version %> | license <%= pkg.license %> | (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %> | <%= pkg.homepage %> */\n',
        // Task configuration.
        clean: {
            dist: ['dist']
        },
        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true
            },
            dist: {
                src: ['src/jquery.cmdr.js'],
                dest: 'dist/jquery.cmdr.js'
            }
        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                src: '<%= concat.dist.dest %>',
                dest: 'dist/jquery.cmdr.min.js'
            }
        },
        version: {
            default: {
                src: ['package.json']
            }
        },
        qunit: {
            all: {
                options: {
                    urls: ['http://localhost:9000/test/cmdr.html']
                }
            }
        },
        jshint: {
            options: {
                reporter: require('jshint-stylish')
            },
            gruntfile: {
                options: {
                    jshintrc: '.jshintrc'
                },
                src: 'Gruntfile.js'
            },
            src: {
                options: {
                    jshintrc: 'src/.jshintrc'
                },
                src: ['src/**/*.js']
            },
            test: {
                options: {
                    jshintrc: 'test/.jshintrc'
                },
                src: ['test/**/*.js']
            }
        },
        watch: {
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            src: {
                files: '<%= jshint.src.src %>',
                tasks: ['jshint:src', 'qunit']
            },
            test: {
                files: '<%= jshint.test.src %>',
                tasks: ['jshint:test', 'qunit']
            }
        },
        connect: {
            server: {
                options: {
                    hostname: '*',
                    port: 9000
                }
            }
        },
        readpkg: {
            default: {}
        }
    });
    
    //Utils
    grunt.registerTask('readpkg', function () {
        grunt.config.set('pkg', grunt.file.readJSON('package.json'));
    });
    
    //For development
    grunt.registerTask('dev', ['jshint', 'connect', 'watch']);

    //For testing
    grunt.registerTask('test', ['jshint', 'connect', 'qunit']);
    grunt.registerTask('test:debug', ['connect', 'qunit']);
        
    //For building
    grunt.registerTask('build', ['jshint', 'connect', 'qunit', 'clean', 'concat', 'uglify']);
                
    //For releasing
    grunt.registerTask('release', ['release:patch']);
    grunt.registerTask('release:major', ['version::major', 'readpkg', 'build']);
    grunt.registerTask('release:minor', ['version::minor', 'readpkg', 'build']);
    grunt.registerTask('release:patch', ['version::patch', 'readpkg', 'build']);
};
