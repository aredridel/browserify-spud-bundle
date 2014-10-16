var bl = require('bl');
var xfrm = require('../');
var path = require('path');
var test = require('tape');
var browserify = require('browserify');

test('test', function (t) {
    var b = browserify();
    b.transform(xfrm);
    b.add(path.resolve(__dirname, 'fixture/main.js'));
    b.bundle().pipe(bl(function (err, bundle) {
        function callback(messages) {
            t.equal(messages.greeting, 'Hello, World!');
            t.end();
        }

        eval(bundle.toString());
    }));
});
