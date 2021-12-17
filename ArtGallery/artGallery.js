class ArtGallery {
    constructor(creator) {
        this.creator = creator,
            this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 },
            this.listOfArticles = [],
            this.guests = []
    }

    addArticle(articleModel, articleName, quantity) {
        if (!this.possibleArticles.hasOwnProperty(articleModel.toLowerCase())) {
            throw new Error('This article model is not included in this gallery!')
        }
        let newArticle = {
            articleModel: articleModel.toLowerCase(),
            articleName,
            quantity
        };
        let currentArticle = this.listOfArticles.find(x => x.articleName == articleName && x.articleModel == articleModel.toLowerCase());

        if (!currentArticle) {
            this.listOfArticles.push(newArticle);
        } else {
            currentArticle.quantity += quantity;

        }


        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`

    }

    inviteGuest(guestName, personality) {


        let newGuest = {
            guestName,
            points: 0,
            purchaseArticle: 0
        }
        if (personality == 'Vip') {
            newGuest.points += 500;
        } else if (personality == 'Middle') {
            newGuest.points += 250;
        } else {
            newGuest.points += 50;
        }

        let currentGuest = this.guests.find(x => x.guestName == guestName);
        if (!currentGuest) {
            this.guests.push(newGuest);
            return `You have successfully invited ${guestName}!`;
        } else {
            throw new Error(`${guestName} has already been invited.`);
        }



    }

    buyArticle(articleModel, articleName, guestName) {
        let currentArticleToBuy = this.listOfArticles.find(x => x.articleName == articleName && x.articleModel == articleModel.toLowerCase());
        if (!currentArticleToBuy) {
            throw new Error('This article is not found.');
        }
        if (currentArticleToBuy.quantity == 0) {
            return `The ${articleName} is not available.`;
        }
        let currentGuestBuyer = this.guests.find(x => x.guestName == guestName);
        if (!currentGuestBuyer) {
            return 'This guest is not invited.';
        }
        if (currentGuestBuyer.points < this.possibleArticles[articleModel]) {
            return 'You need to more points to purchase the article.'
        } else {
            currentGuestBuyer.points -= this.possibleArticles[articleModel];
            currentArticleToBuy.quantity -= 1;
            currentGuestBuyer.purchaseArticle += 1;
            return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`
        }

    }

    showGalleryInfo(criteria) {
        if (criteria == 'article') {
            let result = `Articles information:`
            for (const line of this.listOfArticles) {

                result += `\n${line.articleModel} - ${line.articleName} - ${line.quantity}`;
            }
            return result;
        }
        else if (criteria == 'guest') {
            let result = `Guests information:`
            for (const line of this.guests) {
                result += `\n${line.guestName} - ${line.purchaseArticle}`;
            }
            return result;
        }
    }


}

const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));
