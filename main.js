// Program for getting Percentage of subjects in exams
var arroFun = function (Math, English, Urdu, Physics, Chemistry) {
    var sum = Math + English + Urdu + Physics + Chemistry;
    var total = 500;
    var divide = sum / total;
    var percentage = divide * 100;
    return percentage;
};
var percPrint = arroFun(50, 50, 50, 50, 50);
console.log("you got ".concat(percPrint, "% across the subjets"));
