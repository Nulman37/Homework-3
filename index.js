document.addEventListener("DOMContentLoaded", function (event) {

    let foodArray = [];

	document.getElementById("addFood").addEventListener("click", function () {
        let nameValue = document.getElementById("foodName").value;
        let calorieValue = document.getElementById("calorieCount").value;
        let quantityValue = document.getElementById("quantity").value;
        let divOutputArea = document.getElementById("outputArea");
        
        let temp = new FoodItem(nameValue, calorieValue, quantityValue);

        if (!temp.isValid()){
            alert("Please complete all fields. Calories and quantity must equal a number.")
        }
        else {
            foodArray.push(temp);
            displayCalories();
            divOutputArea.scrollTop = divOutputArea.scrollHeight;
            document.getElementById("form-1").reset();
            document.getElementById("foodName").focus();
        }
    });
    
    let displayCalories = function() {
        let displayString = "";
        let calorieTotal = 0;

        displayString += '<table>' +
                         '<tr><th>Quantity</th>' +
                         '<th>Food</th>' +
                         '<th>Total Calories</th></tr>';
        for (let i in foodArray){
            displayString += '<tr>' +
                             '<td>' + foodArray[i].quantity + '</td>' +
                             '<td>' + foodArray[i].name + '</td>' +
                             '<td>' + foodArray[i].totalCalories() + ' calories</td></tr>';
            calorieTotal += foodArray[i].totalCalories();
        }
        displayString += '</table>' +     
                         "<p>\n==================================================</p>" +
                         "<p>\nCurrent total calories: " + calorieTotal + "</p>";

        document.getElementById("outputArea").innerHTML = displayString;
    }
});
