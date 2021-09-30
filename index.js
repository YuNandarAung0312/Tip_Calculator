
var calculate = document.getElementById("calculate");

function calculateTip() {
   
    var result = document.getElementById("result");

    var billAmount = document.getElementById("billAmount").value;

    var serviceQuality = document.getElementById("serviceQuality").value;

    var people = document.getElementById("people").value;

    console.log(billAmount, serviceQuality, people);

    var tip = (billAmount * serviceQuality) / people;

    console.log(tip);

    result.innerText = tip;

    
};
//calculateTip();


calculate.onclick = function () {
    calculateTip();
}
