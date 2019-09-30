let input;
let stored = "";
let past = undefined;

function func_num(num) {
  const x = document.getElementById(num);
  input = x.value;
  func_step2();
}

function func_step2() {
  if (input <= 9 && input >= 0 && past != undefined) {
    stored = "";
    past = undefined;
    document.getElementById("screen").innerHTML = stored;
    stored = stored.toString();
  }
  stored = stored + input;
  document.getElementById("screen").innerHTML = stored;
}

function func_add() {
  input = "+";
  stored = stored + "+";
  document.getElementById("screen").innerHTML = stored;
  past = undefined;
}

function func_subtract() {
  input = "-";
  stored = stored + "-";
  document.getElementById("screen").innerHTML = stored;
  past = undefined;
}

function func_multiply() {
  input = "*";
  stored = stored + "*";
  document.getElementById("screen").innerHTML = stored;
  past = undefined;
}

function func_divide() {
  input = "/";
  stored = stored + "/";
  document.getElementById("screen").innerHTML = stored;
  past = undefined;
}

function func_L_bracket() {
  input = "(";
  stored = stored + "(";
  document.getElementById("screen").innerHTML = stored;
  past = undefined;
}

function func_R_bracket() {
  input = ")";
  stored = stored + ")";
  document.getElementById("screen").innerHTML = stored;
  past = undefined;
}

function func_decimal() {
  input = ".";
  stored = stored + ".";
  document.getElementById("screen").innerHTML = stored;
  past = undefined;
}

function func_eval() {
  if (input == "+" || input == "-" || input == "/" || input == "*" || input == "(") {
    window.alert("Invalid input! Please try again");
  }
  stored = eval(stored);
  document.getElementById("screen").innerHTML = stored;
  input = undefined;
  stored = stored.toString();
  past = stored;
}

function func_clear() {
  stored = "";
  input = ""; //
  past = undefined;
  document.getElementById("screen").innerHTML = 0;
}

function func_backspace() {
    if(stored.length==1 || stored==""){
        stored=0;
        document.getElementById("screen").innerHTML = 0;
    }
  stored = stored.slice(0, -1);
  input = 0;
  document.getElementById("screen").innerHTML = stored;
}
