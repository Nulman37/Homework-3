document.addEventListener("DOMContentLoaded", function (event) {

    let foodArray = [];

	document.getElementById("addFood").addEventListener("click", function () {
        let nameValue = document.getElementById("foodName").value;
        let calorieValue = document.getElementById("calorieCount").value;
        let quantityValue = document.getElementById("quantity").value;
        
        let temp = new FoodItem(nameValue, calorieValue, quantityValue);

        if (!temp.isValid()){
            alert("Please complete all fields. Calories and quantity must equal a number.")
        }
        else {
            foodArray.push(temp);
            displayCalories();
            document.getElementById("form-1").reset();
        }
    });
    
    let displayCalories = function() {
        let displayString = "";
        let calorieTotal = 0;

        for (let i in foodArray){
            displayString += foodArray[i].toString() + "\n";
            calorieTotal += foodArray[i].totalCalories();
        }

        displayString += "\n=========================";
        displayString += "\nCurrent total calories: " + calorieTotal;

        document.getElementById("outputArea").value = displayString;
    }
});