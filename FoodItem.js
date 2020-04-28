let FoodItem = function(pName, pCalorie, pQuantity) {
    this.name = pName;
    this.calorie = pCalorie;
    this.quantity = pQuantity;

    this.totalCalories = function() {
        return this.calorie * this.quantity;
    }

    this.isValid = function(pName, pCalorie, pQuantity) {
        if (this.name == "" || this.calorie == "" || this.quantity == "") {
            return false;
        } else if (isNaN(this.calorie) || isNaN(this.quantity)) {
            return false;
        } else {
            return true;
        }
    }
}
