function add() {
    var number1 = document.getElementById('number1').value;
    var number2 = document.getElementById('number2').value;
    if (number1 == "" || number2 == "") {
        alert("Enter Number")
    }
    else {

        var addition = parseInt(number1) + parseInt(number2);
        document.getElementById('result').innerHTML = `Addition is ${addition}`;
    }


}
function sub() {
    var number1 = document.getElementById('number1').value;
    var number2 = document.getElementById('number2').value;
    if (number1 == "" || number2 == "") {
        alert("Enter Number")
    }
    else {

        var substraction = parseInt(number1) - parseInt(number2);
        document.getElementById('result').innerHTML = `Substraction is ${substraction}`;
    }

}