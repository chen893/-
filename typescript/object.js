var test = /** @class */ (function () {
    function test() {
    }
    test.prototype.name = function () {
        console.log('test');
    };
    return test;
}());
var t = new test();
t.name;
