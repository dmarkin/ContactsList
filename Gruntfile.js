module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'js/*.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint']
        },
        less: {
            development: {
                options: {
                    paths: ["css/less"]
                },
                files: {
                    "css/result.css": "css/less/source.less",
                    "css/icons.css": "node_modules/bootstrap/less/glyphicons.less"
                }
            },
            production: {
                options: {
                    paths: ["css/less"]
                    },
                files: {
                    "css/result.css": "css/less/source.less",
                    "css/icons.css": "node_modules/bootstrap/less/glyphicons.less"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['jshint', 'less']);
    grunt.registerTask('watch', ['watch']);
};