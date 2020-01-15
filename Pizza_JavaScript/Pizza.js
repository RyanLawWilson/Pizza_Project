var receiptText = "<h3>You Ordered:</h3>";

//Subtotal is printed to the console each time a category is priced
var subTotal = 0;


//Build a receipt
function getReceipt() {
    var runningTotal = 0;       //Cost of the Pizza
    subTotal = 0;

    //Calculates the total by getting the price of size, meat and veggies
    runningTotal = getSize() + getVegetables() + getMeat();

    document.getElementById("showText").innerHTML = receiptText;
    
    //No decimal points - Decimal points are added as a string
    if (runningTotal % 1 == 0) {
        document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
    } else {
        document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal.toFixed(2) + "</strong></h3>";
    }
    
};


//Returns the price for the selected size
function getSize() {
    var sizeTotal = 0;          //Cost of the Pizza size

    //Get all of the size inputs.
    var sizeArray = document.getElementsByClassName("size");

    //Look through all size options, find the checked one, add to receipt
    for (var i in sizeArray) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            receiptText += selectedSize + "<br>";
        }
    }

    //Sets the price of the pizza | changed the if to a switch.
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

    subTotal += sizeTotal;
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + receiptText);
    console.log("subtotal: $" + subTotal + ".00");

    return sizeTotal;
};

//Returns the price for the selected meats
function getMeat() {
    var meatTotal = 0;          //Cost of the Meat
    var selectedMeat = [];      //The meat that was selected
    var meatArray = document.getElementsByClassName("meats");

    //Look through all meat options, find the checked ones, show in console add to receipt
    for (var i in meatArray) {
        if (meatArray[i].checked) {
            selectedMeat.push(meatArray[i].value);
            console.log("selected meat item: (" + meatArray[i].value + ")");
            receiptText += meatArray[i].value + "<br>";
        }
    }

    var meatCount = selectedMeat.length;
    if (meatCount > 1) {
        meatTotal = (meatCount - 1);
    } else {
        meatTotal = 0;
    }

    subTotal += meatTotal;
    console.log("Total selected meat items: " + meatCount);
    console.log(meatCount + " meat - 1 free meat = " + "$" + meatTotal + ".00");
    console.log("meat text1: " + receiptText);
    console.log("subtotal: " + "$" + subTotal + ".00");
    
    return meatTotal;
};

//Returns the price for the selected vegetables
function getVegetables() {
    var veggieTotal;
    var selectedVeggies = [];
    var veggieArray = document.getElementsByClassName("vegetables")

    for (var i in veggieArray) {
        if (veggieArray[i].checked) {
            selectedVeggies.push(veggieArray[i].value);
            console.log("selected veggie item: (" + veggieArray[i].value + ")");
            receiptText += veggieArray[i].value + "<br>";
        }
    }

    //The price is $0.75 per vegetable
    veggieTotal = (selectedVeggies.length * 0.75);
    subTotal += veggieTotal;
    console.log("Total selected vegetable items: " + veggieArray.length);
    console.log("veggie text1: " + receiptText);
    console.log("subtotal: " + "$" + subTotal + ".00");

    return veggieTotal;
}