# Nu Validator for AngularJS

[![Build Status](https://travis-ci.org/hysoftware/node-validator-nu-angular.svg?branch=master)](https://travis-ci.org/hysoftware/node-validator-nu-angular)
[![Code Climate](https://codeclimate.com/github/hysoftware/node-validator-nu-angular/badges/gpa.svg)](https://codeclimate.com/github/hysoftware/node-validator-nu-angular)


## What This?

This is a wrapper of [node-validator-nu](https://github.com/hysoftware/node-validator-nu) for
angularJS

## What differences between [node-validator-nu](https://github.com/hysoftware/node-validator-nu) and this?

[node-validator-nu](https://github.com/hysoftware/node-validator-nu) checks "pure" HTML.
i.e. There are tags sandwiched between html+header, and body. However AngularJS templates,
esp template page and directive, are not sandwiched between html stuff.

This API wisely sandwiches template code with html stuff. Of course, you can check normal pages.

### How to use

Also just simple:
~~~
/*global exports, require*/
(function (exports, require) {
    var vnu = require("validator-nu-angular");
    // Put HTML data, not the name of the file.
    vnu.validate("html here", function () {
        // callback
    });
    // If you got validatornu was not found, set vnu path to 3rd parameter.
    vnu.validate("html here", function () {
        // callback
    }, "/usr/bin/vnu.jar");
}(exports, require));
~~~
