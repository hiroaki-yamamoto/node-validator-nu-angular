/*global exports, require*/
(function (exports, require) {
    "use strict";
    /**
    Test if Validator NU for angularJS is defined.
    */
    exports.testValidatorDefined = function (test) {
        var vnu = require("../lib/vnu-angular");
        test.ok(vnu !== undefined, "vnu-angular should be defined");
        test.done();
    };
}(exports, require));
