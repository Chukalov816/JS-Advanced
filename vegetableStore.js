class VegetableStore {
    constructor(owner, location) {
        this.owner = owner,
            this.location = location,
            this.availableProducts = []

    }
    loadingVegetables(vegetables) {
        for (const line of vegetables) {
            let [type, quantity, price] = line.split(' ');
            quantity = Number(quantity);
            price = Number(price);
            let newVegetable = {
                type,
                quantity,
                price
            }

            let currentProduct = this.availableProducts.find(x => x.type == type);
            if (currentProduct) {

                currentProduct.quantity += quantity;
                if (currentProduct.price < price) {
                    currentProduct.price = price;


                }
            } else {
                this.availableProducts.push(newVegetable);

            }

        }
        let result = `Successfully added`;
        let types = [];
        for (const line of this.availableProducts) {
            types.push(line.type);
        }
        result += ` ${types.join(', ')}`;
        return result;
    }
    buyingVegetables(selectedProducts) {
        let totalPrice = 0;
        for (const line of selectedProducts) {

            let [type, quantity] = line.split(' ');
            quantity = Number(quantity);
            let currentProduct = this.availableProducts.find(x => x.type == type);
            if (!currentProduct) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
            if (quantity > currentProduct.quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
            let productPrice = quantity * currentProduct.price;
            currentProduct.quantity -= quantity;
            totalPrice += productPrice;
        }
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`

    }

    rottingVegetable(type, quantity) {
        let currentProduct = this.availableProducts.find(x => x.type == type);
        if (!currentProduct) {
            throw new Error(`${type} is not available in the store.`);
        }
        if (quantity > currentProduct.quantity) {
            currentProduct.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        } else {
            currentProduct.quantity -= quantity;
            return `Some quantity of the ${type} has been removed.`
        }

    }

    revision() {
        let result = `Available vegetables:`;
        let sorted = this.availableProducts.sort((a,b)=> a.price - b.price);
        for (const line of sorted) {
            result += `\n${line.type}-${line.quantity}-$${line.price}`;
        }
        result += `\nThe owner of the store is ${this.owner}, and the location is ${this.location}.`;
        return result
    }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());



