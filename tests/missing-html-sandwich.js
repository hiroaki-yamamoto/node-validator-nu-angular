/*global exports, require, process*/

(function (exports, require, process) {
    "use strict";
    exports.test_missing_html_sandwich = function (test) {
        var fs = require("fs"),
            vnu = require("../lib/vnu-angular");
        fs.readFile("./tests/data/missing-html-sandwich.html", function (err, input) {
            if (err) {
                throw err;
            }
            vnu.validate(input.toString(), function (err, result) {
                if (err) {
                    throw err;
                }
                test.equal(result.length, 0, "The validation shouldn't throw the error.");
                test.done();
            }, process.env.VNU_BIN);
        });
    };
}(exports, require, process));
