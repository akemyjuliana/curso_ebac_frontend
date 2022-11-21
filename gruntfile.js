module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development:{
                files: {
                    'main.css': 'main;less'
                }
            },
            production: {
                options: {
                    compress: true
                },
                files: {
                    'main.min.css': 'main.less'
                }
            }
        },
        uglify: {
            target: {
                files: {
                    '.dist/scripts/main.min.js': 'src/scripts/main.js'
                }
            }
        }
    }),


    grunt.loadNpmTAsks('grunt-contrib-less');
    grunt.loadNpmTAsks('grunt-contrib-uglify');

    grunt.registerTasks('build', 'less:production')
    grunt.registerTasks('default', 'less:development', )
}