// (function() {
//     "use strict";
// }());
module.exports = function(grunt) {
        var libraries = [
						"dependecies/jquery.js",
						"dependecies/angular.js",
						"dependecies/angular-animate.min.js",
						"dependecies/bootstrap.js",
						"dependecies/jquery.fullPage.js",
						"dependecies/angular-fullpage.js",
						"dependecies/ui-bootstrap-tpls.js",
						"dependecies/ScrollMagic.js",
						"app.js"
						// "js/*.js",

        ];


        grunt.initConfig({
                // pkg: grunt.file.readJSON("package.json"),

          jshint: { //Check all selfwritten JS before concatting with jQuery and angularJS


                    // development: {
                    //
                    //     options: {
                    //         force: true
                    //     },
                    //     src: "app/**/*.js"
                    // },
                    // production: {
                    //     options: {
                    //         force: true
                    //     },
                    //     src: "app/**/*.js"
                    // },
                    development: {
                        options: {
                            force: true
                        },
                        src: "js/**/*.js",
                        dest: "dist/js/app.js"
                    }
                },
                //
        uglify: { //Make it ugly and unreadable - Improves performance a great deal
                    // development: {
                    //     options: {
                    //         mangle: false,
                    //         compress: false,
                    //         beautify: true
                    //     },
                    //     src: libraries,
                    //     dest: "dist/js/main.min.js"
                    // },
                    // production: {
                    //     options: {
                    //         mangle: true,
                    //         compress: true
                    //     },
                    //     src: libraries,
                    //     dest: "dist/js/main.min.js"
                    // },
                    components: {
                          options: {
                              mangle: false,
                              compress: false
                          },
                          src: libraries,
                          dest: "dist/js/main.min.js"
                    }
                },


          less: { //Make it ugly and unreadable - Improves performance a great deal
                    development: {
                        options: {
                            compress: false,
                            ieCompat: true,
                            strictMath: true,
                            syncImport: true,
                        },
                        src: [
                            "app/styles/app.less",
                            "app/styles/app.css",
                            'app/styles/application/all.less',
                            "app/styles/night.css",
                            "app/styles/reveal.css",
                            "app/styles/bootstrap.css",
                            "node_modules/material-icons/css/material-icons.css",
                            "app/styles/animate.css",
                            "app/styles/hover.css",
                            "app/styles/fullcalendar.css",
                            // "node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css",
                            // "node_modules/bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.css",
                            // "node_modules/toastr/build/toastr.css"
                            // "node_modules/perfect-scrollbar/dist/css/perfect-scrollbar.css"
                        ],
                        dest: "dist/css/main.min.css"
                    },
                    production: {
                        options: {
                            compress: true,
                            ieCompat: true,
                            strictMath: true,
                            syncImport: true,
                        },
                        src: [
                            "styles/app.css",
                            "styles/bootstrap.css"
                        ],
                        dest: "dist/css/main.min.css"
                    }
                  },
          copy: {
                main: {
                    files: [{
                        expand: true,
                        cwd: "dist/",
                        src: "**/*.html",
                        dest: "dist"
                    }, {
                        expand: true,
                        cwd: "node_modules/font-awesome",
                        src: "fonts/*",
                        dest: "dist"
                    }, {
                        expand: true,
                        cwd: "./",
                        src: "public/**/*",
                        dest: "dist"
                    }]
                }
            },

          cssmin: {
                target: {
                  files: [{
                    expand: true,
                    cwd: 'styles/',
                    src: [
											'bootstrap.css',
											'material-icons.css',
											'app.css'

										],
                    dest: "dist/css/"
                    // ext: 'print.css'
                  }]
                }
              },

          clean: {
                  main: ["dist/*", "tmp/*"]
              },

          watch: {
                // production: {
                //     files: ["app/**/*", "public/**/*"],
                //     tasks: ["clean:main", "jshint:components", "uglify:components", "jshint:production", "uglify:production", "less:production", "copy"],
                //     options: {
                //         debounceDelay: 3000,
                //         spawn: true
                //     }
                // },
                development: {
                    files: ["js/**/*", "styles/**/*"],
                    tasks: ["clean:main", "uglify:components", "cssmin:target", "copy:main"],
                    // tasks: ["clean:main", "jshint:development", "less:development", "cssmin:target", "copy:main"],
                    options: {
                        debounceDelay: 3000,
                        spawn: true
                    }
                }
            }
                //     components: {
                //         options: {
                //             compress: true,
                //             ieCompat: true,
                //             strictMath: true,
                //             syncImport: true,
                //         },
                //         src: [
                //             "madplan/src/less/global_comments.less"
                //         ],
                //         dest: "madplan/dist/min/main.min.css"
                //     }
                // },
                // watch: {
                //     production: {
                //         files: ["app/**/*", "public/**/*", "madplan/src/**/*"],
                //         tasks: ["uglify:components", "less:components", "jshint:production", "uglify:production", "less:production"],
                //         options: {
                //             debounceDelay: 3000,
                //             spawn: true
                //         }
                //     },
                //     development: {
                //         files: ["app/**/*", "public/**/*", "madplan/src/**/*"],
                //         tasks: ["uglify:components", "less:components", "jshint:production", "uglify:production", "less:production",
                //             options: {
                //                 debounceDelay: 3000,
                //                 spawn: true
                //             }
                //         }
                //     }

                });

            grunt.loadNpmTasks("grunt-contrib-uglify");
            grunt.loadNpmTasks("grunt-contrib-jshint");
            grunt.loadNpmTasks("grunt-contrib-less");
            grunt.loadNpmTasks("grunt-contrib-watch");
            grunt.loadNpmTasks("grunt-contrib-copy");
            grunt.loadNpmTasks('grunt-contrib-clean');
            grunt.loadNpmTasks("grunt-contrib-cssmin");


            // var environment = grunt.option('environment') || 'development'; //How must it build (production || development)
            // var watch = grunt.option("watch") || false;


            // if (watch) {
                // grunt.registerTask("default", ["jshint:components", "uglify:components", "less:components", "jshint:" + environment, "uglify:" + environment, "less:" + environment, "watch:" + environment]);
            // } else {
                // grunt.registerTask("default", ["jshint:components", "uglify:components", "less:components", "jshint:" + environment, "uglify:" + environment, "less:" + environment]);
                // grunt.registerTask("default", ["jshint:components", "uglify:components", "less:components"]);
                grunt.registerTask("default", ["uglify:components", "less:development", "cssmin:target", "copy:main"]);
            // }


            // grunt.registerTask("components", ["jshint:components", "uglify:components", "less:components"]);

        };
