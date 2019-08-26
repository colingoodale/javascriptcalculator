function blinker() {
    $('.blink-me').fadeOut(200);
    $('.blink-me').fadeIn(200);
}
setInterval(blinker, 500);

var currString;
var numbRegex = /^[0-9][A-Za-z0-9 -]*$/;
var addRegex = /(\+)/;
var subRegex = /(-)/;
var mulRegex = /(\*)/;
var divRegex = /(\/)/;
var equalsRegex = /^(=)$/;

function handleInput(input) {
    var numbCheck = numbRegex.test(input);
    var addCheck = addRegex.test(input);
    var subCheck = subRegex.test(input);
    var mulCheck = mulRegex.test(input);
    var divCheck = divRegex.test(input);
    if (input === "C") {
        $(".calc-typed").empty();
        var span = $("<span />").addClass("blink-me").html("_");
        $(".calc-typed").append(span);
    }
    if ((numbCheck === true) || (addCheck === true) || (subCheck === true) || (mulCheck === true) || (divCheck === true)) {
        $(".calc-typed").append(input);
    }

}
function handleOperation(operation) {

    var firstNumb = [];
    var secNumb = [];
    var operator;
    var bool = false;
    var opOn = false;
    for (i = 0; i < operation.length; i++) {
        console.log(i);
        var numbCheck = numbRegex.test(operation[i]);
        var addCheck = addRegex.test(operation[i]);
        var subCheck = subRegex.test(operation[i]);
        var mulCheck = mulRegex.test(operation[i]);
        var divCheck = divRegex.test(operation[i]);
        if ((addCheck == true) || (subCheck == true) || (mulCheck == true) || (divCheck == true)) {
            operator = operation[i];
            bool = true;
        }
        if ((numbCheck === true) && (bool === false)) {
            firstNumb.push(operation[i]);
        }
        if ((numbCheck === true) && (bool === true)) {
            secNumb.push(operation[i]);
        }


    }

    var firStr = firstNumb.join("");
    var secStr = secNumb.join("");
    var firstInt = parseInt(firStr, 10);
    var secInt = parseInt(secStr, 10);
    if (operator === "+") {

        result = firstInt + secInt;
    }
    if (operator === "-") {

        result = firstInt - secInt;
    }
    if (operator === "*") {

        result = firstInt * secInt;
    }
    if (operator === "/") {

        result = firstInt / secInt;
    }
    $(".calc-operation").empty();
    $(".calc-typed").empty();
    var span = $("<span />").addClass("blink-me").html("_");
    $(".calc-typed").append(span);
    $(".calc-typed").append(result);
    $(".calc-operation").append(operation + "=" + result);
}
$(document).on("click", ".other", function () {
    var numb = $(this).attr("attr");
    handleInput(numb);
})
$("#equals").on("click", function () {
    var operation = $(".calc-typed").text().substring(1);
    handleOperation(operation);
})
