// here is a new comments

var floats = [];
var operators = [];
var chars = [];

//this function works through arrays 'floats' and 'operators' to calculate the result
function calculate() {

  //do divisions
  for (var j = 0; j < operators.length; j++) {
    if (floats.length === 1) {
      break;
    }

    if (operators[j] === "divide") {
      var toSplice = floats[j] / floats[j + 1];
      floats.splice(j, 2, toSplice);
      operators.splice(j, 1);
      j--;
    }
  }

  //do multiplication
  for (var j = 0; j < operators.length; j++) {
    if (floats.length === 1) {
      break;
    }

    if (operators[j] === "multiply") {
      var toSplice = floats[j] * floats[j + 1];
      floats.splice(j, 2, toSplice);
      operators.splice(j, 1);
      j--;
    }
  }

  //do addition
  for (var j = 0; j < operators.length; j++) {
    if (floats.length === 1) {
      break;
    }

    if (operators[j] === "plus") {
      var toSplice = floats[j] + floats[j + 1];
      floats.splice(j, 2, toSplice);
      operators.splice(j, 1);
      j--;
    }
  }

  //do subtraction
  for (var j = 0; j < operators.length; j++) {
    if (floats.length === 1) {
      break;
    }

    if (operators[j] === "minus") {
      var toSplice = floats[j] - floats[j + 1];
      floats.splice(j, 2, toSplice);
      operators.splice(j, 1);
      j--;
    }
  }

  chars = [floats[0]];
  return floats[0];
}

//The meat and bones:
function main(pressed) {
  var x = Number.parseInt(pressed, 10);

  if (x >= 0 && x <= 9 || pressed === ".") {
    chars.push(pressed)
    return pressed;
  }
  else {
    if (chars.length > 0) {
      var string = chars.join("");
      var floated = Number.parseFloat(string);
      floats.push(floated);
      chars = [];
    }

    operators.push(pressed);

    switch(pressed) {
      case "divide":
        return " ÷ ";
      case "multiply":
        return " x ";
      case "plus":
        return " + ";
      case "minus":
        return " - ";
    }
  }
}

//run time code:
$("document").ready(function() {
  var onShow = [];

  $(".norm").click(function(event) {
    if ($("#screen"))
    var last = main(event.target.id);
    onShow.push(last);
    $("#screen").append(last);
  });

  $("#equals").click(function() {
    var result = calculate();
    onShow = [result];
    $("#screen").html(result);
    floats = [];
    operators = [];
  });

  $("#ac").click(function() {
    operators = [];
    floats = [];
    chars = [];
    onShow = [];
    $("#screen").html("");
  });

  $("#ce").click(function() {
    onShow.pop();
    var display = onShow.join("");
    $("#screen").html(display);

    if (chars.length > 0) {
      chars.pop();
    }
    else {
      operators.pop();
    }
  });
});
