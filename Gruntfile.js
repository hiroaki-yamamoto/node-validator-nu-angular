/*global module, require*/
(function (module, require) {
    "use strict";
    module.exports = function (grunt) {
        require(
            'matchdep'
        ).filterDev(
            'grunt-*'
        ).forEach(
            grunt.loadNpmTasks
        );
        var testTasks = [
            "jslint:check"
        ], devTasks = testTasks;
        grunt.initConfig({
            "jslint": {
                "check": {
                    "src": [
                        "Gruntfile.js",
                        "lib/**/*.js",
                        "tests/**/*.js"
                    ]
                }
            },
            "watch": {
                "dev": {
                    "files": [
                        "Gruntfile.js",
                        "lib/**/*.js",
                        "tests/**/*.js"
                    ],
                    "tasks": devTasks
                }
            }
        });
        grunt.registerTask("dev", "Development Mode", ["watch:dev"]);
        grunt.registerTask("test", "Test mode for CI", testTasks);
    };
}(module, require));
