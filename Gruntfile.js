module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*!\n' +
            ' * Bootstrap without jQuery v<%= pkg.version %>\n' +
            ' * By <%= pkg.author %> under <%= pkg.license %> License\n' +
            ' <%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            ' */\n',
        jshint: {
            options: {
                browser: true,
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                undef: true,
                unused: true
            },
            all: ['bower.json', 'package.json', 'bootstrap2/bootstrap-without-jquery.js']
        },
        uglify: {
            options: {
                banner: '<%= banner %>',
                report: 'gzip'
            },
            dist: {
                src: 'bootstrap2/<%= pkg.name %>.js',
                dest: 'bootstrap2/<%= pkg.name %>.min.js'
            }
        },
    });
    
    //grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['jshint', 'uglify']);
};



