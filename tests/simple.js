/*global exports, require, process*/
(function (exports, require, process) {
    "use strict";
    exports.testSimplePage = function (test) {
        var fs = require("fs"),
            validate = require("../lib/vnu-angular").validate;
        fs.readFile("./tests/data/simplePage.html", function (err, data) {
            if (err) {
                throw err;
            }
            validate(data.toString(), function (validationErr, result) {
                if (validationErr) {
                    throw validationErr;
                }
                test.equal(
                    result.length,
                    0,
                    "Assessment result should be an empty list"
                );
                test.done();
            }, process.env.VNU_BIN);
        });
    };
}(exports, require, process));
