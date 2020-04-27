let FoodItem = function(pName, pCalorie, pQuantity) {
    this.name = pName;
    this.calorie = pCalorie;
    this.quantity = pQuantity;

    this.totalCalories = function() {
        return this.calorie * this.quantity;
    }

    this.toString = function() {
        let totalCal = this.totalCalories();
        return this.quantity + " " + this.name + " " + totalCal + " calories";
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