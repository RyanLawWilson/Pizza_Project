

//Build a receipt
function getReceipt() {
    var text1 = "<h3>You Ordered:</h3>";

    var runningTotal = 0;       //Cost of the Pizza
    var sizeTotal = 0;          //Cost of the Pizza size

    var sizeArray = document.getElementsByClassName("size");

    //Look through all size options, find the checked one, add to receipt
    for (var i in sizeArray) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 += selectedSize + "<br>";
        }
    }

    //Sets the size of the pizza that was chosen | changed the if to a switch.
    switch (selectedSize) {
        case "Personal Pizza":
            sizeTotal = 6;
            break;
        case "Medium Pizza":
            sizeTotal = 10;
            break;
        case "Large Pizza":
            sizeTotal = 14;
            break;
        case "Extra Large Pizza":
            sizeTotal = 16;
            break;
        case "Massive Pizza":
            sizeTotal = 20;
            break;
    }

    runningTotal = sizeTotal;
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");

    getMeat(runningTotal, text1);
};


function getSize() {

};




function getMeat(runningTotal, text1) {
    var meatTotal = 0;          //Cost of the Meat
    var selectedMeat = [];      //The meat that was selected
    var meatArray = document.getElementsByClassName("meats");

    //Look through all meat options, find the checked ones, show in console add to receipt
    for (var i in meatArray) {
        if (meatArray[i].checked) {
            selectedMeat.push(meatArray[i].value);
            console.log("selected meat item: (" + meatArray[i].value + ")");
            text1 += meatArray[i].value + "<br>";
        }
    }

    var meatCount = selectedMeat.length;
    if (meatCount > 1) {
        meatTotal = (meatCount - 1);
    } else {
        meatTotal = 0;
    }

    runningTotal += meatTotal;
    console.log("Total selected meat items: " + meatCount);
    console.log(meatCount + " meat - 1 free meat = " + "$" + meatTotal + ".00");
    console.log("meat text1: " + text1);
    console.log("Purchase Total: " + "$" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
};

function getVegetables() {

}