class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
        if (this.budget < 0) {
            throw new Error('The budget cannot be a negative number');
        }

    }

    shopping(inputArr) {
        let productType = inputArr[0];
        let productPrice = inputArr[1];
        if (productPrice > this.budget) {
            throw new Error('Not enough money to buy this product');
        }
        this.products.push(productType);
        this.budget -= productPrice;
        return `You have successfully bought ${productType}!`;
    }



    recipes(recipe) {

        recipe.productsList.forEach(p => {
            if (!this.products.includes(p)) {
                throw new Error('We do not have this product');
            }
        });

        this.dishes.push(recipe);
        return `${recipe.recipeName} has been successfully cooked!`;

    }

    inviteGuests(name, dish) {
        if (!this.dishes.some(x => x.recipeName == dish)) {
            throw new Error('We do not have this dish');
        }
        if (this.guests.hasOwnProperty(name)) {
            throw new Error('This guest has already been invited');
        }
        this.guests[name] = dish;
        return `You have successfully invited ${name}!`;

    }

    showAttendance() {

        let nameList = Object.keys(this.guests);
        let result = '';
        nameList.forEach(name => {
            let currentDish = this.guests[name];
            let currentProducts = this.dishes.find(x => x.recipeName == currentDish);

            result == ''
                ? result += `${name} will eat ${currentDish}, which consists of ${currentProducts.productsList.join(', ')}`
                : result += `\n${name} will eat ${currentDish}, which consists of ${currentProducts.productsList.join(', ')}`

        });
        return result;
    }

}

let dinner = new ChristmasDinner(-200);


dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Ivan', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
