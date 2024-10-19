const cocktailSelect = document.getElementById('cocktailSelect');
const cocktailDetails = document.getElementById('cocktailDetails');

const cocktails = {
    "Mojito": {
        image: "images/mojito.jpg",
        ingredients: [
            "2 oz White Rum",
            "1 oz Fresh Lime Juice",
            "2 tsp Sugar",
            "Mint Leaves",
            "Club Soda"
        ]
    },
    "Daiquiri": {
        image: "images/Daiquiri.jpg",
        ingredients: [
            "2 oz White Rum",
            "1 oz Fresh Lime Juice",
            "1 tsp Sugar"
        ]
    },
    "Pina Colada": {
        image: "images/pinaColada.jpeg",
        ingredients: [
            "2 oz White Rum",
            "1 oz Coconut Cream",
            "6 oz Fresh Pineapple Juice"
        ]
    },
    "Cosmopolitan": {
        image: "https://www.thecocktaildb.com/images/media/drink/kx6w1s1589580513.jpg",
        ingredients: [
            "1 1/2 oz Vodka",
            "1 oz Cranberry Juice",
            "1/2 oz Triple Sec",
            "1/2 oz Fresh Lime Juice"
        ]
    },
    "Old Fashioned": {
        image: "https://www.thecocktaildb.com/images/media/drink/7x3c4b1589580197.jpg",
        ingredients: [
            "2 oz Bourbon",
            "1 Sugar Cube",
            "2 dashes Angostura Bitters",
            "Orange Twist"
        ]
    }
};

cocktailSelect.addEventListener('change', (event) => {
    const cocktailName = event.target.value;
    const cocktail = cocktails[cocktailName];

    if (cocktail) {
        cocktailDetails.innerHTML = `
            <h3>${cocktailName}</h3>
            <img src="${cocktail.image}" alt="${cocktailName}" />
            <p><strong>Ingredients:</strong></p>
            <ul>
                ${cocktail.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
        `;
        cocktailDetails.style.display = 'block';
    } else {
        cocktailDetails.style.display = 'none';
    }
});
