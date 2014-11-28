'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// '<%= config.src %>/templates/pages/{,*/}*.hbs'
// use this if you want to match all subfolders:
// '<%= config.src %>/templates/pages/**/*.hbs'

module.exports = function( grunt ) {

    // Creates the timer in the output
    //require('time-grunt')(grunt);

    var site = grunt.file.readYAML( './grunt-config.yml' );

    // Project configuration.
    grunt.initConfig({

        site: site,
        config: {
            src: site.src.path
        },

    watch: {
      assemble: {
        files: ['<%= config.src %>/{content,data,templates,assets}/{,*/}*.{md,hbs,yml,css}'],
        tasks: ['assemble','copy:assets']
      }
//        ,
//      livereload: {
//        options: {
//          livereload: '<%= connect.options.livereload %>'
//        },
//        files: [
//          '<%= config.dist %>/{,*/}*.html',
//          '<%= config.dist %>/assets/{,*/}*.css',
//          '<%= config.dist %>/assets/{,*/}*.js',
//          '<%= config.dist %>/assets/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
//        ]
//      }
    },

        connect: {
            options: {
                port: 9000,
                //livereload: 35729,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            }
            ,
            livereload: {
                options: {
                    open: true,
                    base: [
                        './../app/views/'
                    ]
                }
            }
        },

        assemble: {
            options: {
                force: true,
                flatten: true,
                trace: true,
                //assets: '<%= config.dist %>/assets',
                //layout: '<%= config.src %>/templates/layouts/default.hbs',
                layoutdir: '<%= site.src.path %>/templates/layouts',
                data: './grunt-config.yml',
                //data: 'src/data/*.{json,yml}',
                partials: '<%= site.src.path %>/templates/partials/*.hbs',

                // Extensions
                helpers: './../src/extensions/helpers/*.js',

                marked: {
                    gfm: true,
                    tables: true,
                    sanitize: false
                },
                prettify: {
                    indent: 2,
                    condense: true,
                    padcomments: true
                }
            },
            files: {
                '<%= site.dest.path %>/': ['<%= site.src.path %>/templates/pages/*.hbs']
            },
            pages: {
                options: {
                    layout: 'default.hbs'
                },
                files: [
                    {
                        flatten: true,
                        expand: true,
                        cwd: '<%= site.src.path %>/content/',
                        src: ['**/*.md'],
                        dest: '<%= site.dest.path %>'
                    }
                ]
            }
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            options: {
                force: true
            },
            files  : {
                src: [ '<%= site.dest.path %>/**/**' ]
            }
        },

        copy: {
            options: {
                trace: true
            },
            assets: {
                files: [
                    {expand: true, cwd: './../bower_components/bootstrap/dist/css', src: ['*.min.*'], dest: './../app/views/assets/external/bootstrap/css/'},
                    {expand: true, cwd: './../src/assets/css', src: ['*.css'], dest: './../app/views/assets/css/'},
                    {expand: true, cwd: './../src/assets/photos', src: ['*.*'], dest: './../app/views/assets/photos/'},
                    {expand: true, cwd: './../src/assets/external', src: ['**/*.*'], dest: './../app/views/assets/external/'},
                    {expand: true, cwd: './../src/assets/js', src: ['*.*'], dest: './../app/views/assets/js/'},
                    {expand: true, cwd: './../bower_components/bootstrap/dist/fonts', src: ['*.*'], dest: './../app/views/assets/external/bootstrap/fonts/'},
                    {expand: true, cwd: './../bower_components/bootstrap/dist/js', src: ['*.*'], dest: './../app/views/assets/external/bootstrap/'},
                    {expand: true, cwd: './../bower_components/jquery/dist', src: ['*.min.*'], dest: './../app/views/assets/external/jquery/'},
                    {expand: true, cwd: './../bower_components/jquery-ui/', src: ['jquery-ui.min.js'], dest: './../app/views/assets/external/jquery-ui/'}
                ]
            },
            downloads: {
                files: [
                    {
                        expand: true,
                        cwd: './../src/download',
                        src: ['*.*'],
                        dest: './../app/views/download/'
                    }
                ]
            },
            images: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        cwd: './../src/content',
                        src: ['**/img/*.*'],
                        dest: './../app/views/img/'
                    }]
            }
        },

        less: {
            build: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2,
                    cleancss: true
                },
                files: {
                    // target.css file: source.less file
                    "./../app/views/assets/css/customStyle.css": "./../src/assets/less/generator.less"
                }
            }
        },

        htmlmin: {
            all: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                    trace: false
                },
                files: [
                    {
                        expand: true,
                        cwd: 'build',
                        src: ['*.html'],
                        dest: 'build'
                    }
                ]
            }
        },

        wkhtmltopdf: {
            dev: {
                src: 'build/*.html',
                dest: 'build/pdf/'
            }
        },

        compress: {
            pdf: {
                options: {
                    archive: 'build/download/qWidget_documentation_pdf_v<%=site.meta.version%>.zip'
                },
                files: [
                    {src: ['build/pdf/*.pdf'], dest: 'internal_folder/', filter: 'isFile'}
                ]
            }
        }

    });

    grunt.loadNpmTasks('assemble');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-wkhtmltopdf');


//  grunt.registerTask('server', [
//    'clean',
//    'assemble',
//    'connect:livereload',
//    'watch'
//  ]);

    grunt.registerTask('build', [
        'clean',
        'assemble',
        'copy:assets',
        'copy:images',
        'copy:downloads',
        'less:build',
        'htmlmin',

        'wkhtmltopdf',

        'connect',
        'watch'

    ]);

    grunt.registerTask('default', [
        'build'
    ]);

    // Has to be called separately since I have no idea how to get a callback when generating the
    // PDFs is successful.
    grunt.registerTask('createPdfZip', [
       'compress:pdf'
    ]);

};
