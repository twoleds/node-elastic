// An alternative ElasticSearch client for NodeJS.
// Copyright (C) 2015  Jaroslav Kuba
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

var elastic = require("../index.js");

exports.testExecute = function (test) {

    test.throws(function () {
        var cmd = new elastic.TypeCommand();
        cmd.execute(null);
    }, Error, "Execute method must throw exception.");

    test.done();

};

exports.testGettersAndSetters = function (test) {

    var cmd = new elastic.TypeCommand();
    cmd.setType("name-of-type");
    test.strictEqual(
        cmd.getType(), "name-of-type", "Corrupted getType or setType."
    );
    test.done();

};

exports.testInheritance = function (test) {

    var cmd = new elastic.TypeCommand();
    test.ok(
        cmd instanceof elastic.IndexCommand,
        "TypeCommand must extends IndexCommand."
    );
    test.done();

};
