// Functions typing
var func1 = function (num) {
    return String(num);
};
function func2(cb) {
    if (cb === undefined) {
        cb = String;
    }
    var text = cb(12);
    console.log(typeof text);
}
func2(function (num) {
    var numString = String(num);
    return numString;
});
