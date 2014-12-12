/*global exports, require*/
(function (exports, require) {
    "use strict";
    exports.validate = function (input, callback, vnuPath) {
        /*
        Run validatornu for AngularJS.
        callback should be a function that has the following parameters:
        err: error when the parsing is failed. if succeeded, this will be falsy value.
        result: result object if succeeded. if failed, this will be falsy value.
        */
        var validatornu = require("validator-nu"),
            parseXML = require("xml2js").parseString,
            templatize_needs = {
                "docutypeNeeded": false,
                "needsSandwich": false
            };
        if (input.indexOf("<!DOCTYPE html>") !== 0 &&
                input.indexOf("<!doctype html>") !== 0) {
            templatize_needs.docutypeNeeded = true;
        }
        parseXML(input, {"strict": false}, function (err, result) {
            var strToValidate = null,
                success = function (result) {
                    callback(undefined, result);
                };
            if (err) {
                callback(err);
            }
            if (result.HTML === undefined) {
                templatize_needs.needsSandwich = true;
            }
            if (templatize_needs.needsSandwich) {
                strToValidate =
                    "<html lang=\"en\">" +
                    "<head>" +
                    "<meta charset=\"UTF-8\">" +
                    "<title>Dummy title</title>" +
                    "</head>" +
                    "<body>" +
                    input +
                    "</body>" +
                    "</html>";
            }
            if (templatize_needs.docutypeNeeded) {
                if (strToValidate) {
                    strToValidate = "<!DOCTYPE html>" + strToValidate;
                } else {
                    strToValidate = "<!DOCTYPE html>" + input;
                }
            }
            if (!templatize_needs.docutypeNeeded &&
                    !templatize_needs.needsSandwich) {
                strToValidate = input;
            }
            try {
                validatornu.validate(strToValidate, success, vnuPath);
            } catch (error) {
                callback(error);
            }
        });
    };
}(exports, require));
