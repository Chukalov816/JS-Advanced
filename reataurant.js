class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
        this.counter = 0;
    }
    loadProducts(products) {

        for (const product of products) {
            let [productName, productQuantity, productTotalPrice] = product.split(' ');
            productTotalPrice = Number(productTotalPrice);
            if (productTotalPrice <= this.budgetMoney) {
                if (!this.stockProducts.hasOwnProperty(productName)) {
                    this.stockProducts[productName] = 0;
                } this.stockProducts[productName] += Number(productQuantity);
                this.budgetMoney -= productTotalPrice;
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }

        }
        return this.history.join('\n')
    }
    addToMenu(meal, neededProducts, price) {

        let currentMeal = {
            products: [],
            price
        };
        for (const line of neededProducts) {
            let [productName, productQuantity] = line.split(' ');
            productQuantity=Number(productQuantity);
            currentMeal.products.push({
                productName,
                productQuantity
            })
        }

        if (!this.menu.hasOwnProperty(meal)) {
            this.menu[meal] = currentMeal;
            this.counter++;
            if (this.counter == 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
            } else {
                return `Great idea! Now with the ${meal} we have ${this.counter} meals in the menu, other ideas?`;
            }
        } else {
            return `The ${meal} is already in the our menu, try something different`
        }


    }
    showTheMenu() {
        let meals = Object.keys(this.menu);
        if (meals.length == 0) {
            return 'Our menu is not ready yet, please come later...';
        } else {
            let result = '';
            meals.forEach(x => {
                result += `\n${x} - $ ${this.menu[x].price}`;
            })
            return result;
        }
    }
    makeTheOrder(mealOrder) {
        if (!this.menu.hasOwnProperty(mealOrder)) {
            return `There is not ${mealOrder} yet in our menu, do you want to order something else?`
        }


        let orderProducts = this.menu[mealOrder].products;
        for (const line of orderProducts) {
            if (!this.stockProducts.hasOwnProperty(line.productName) || this.stockProducts[line.productName] < line.productQuantity) {
                return `For the time being, we cannot complete your order (${mealOrder}), we are very sorry...`
            }
            this.stockProducts[line.productName]-=line.productQuantity;
        }

        let result=`Your order (${mealOrder}) will be completed in the next 30 minutes and will cost you ${this.menu[mealOrder].price}.`;
        this.budgetMoney+= this.menu[mealOrder].price;

        return result;


    }
}

let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));

