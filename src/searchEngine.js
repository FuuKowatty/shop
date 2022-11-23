import render from "./renderProducts";
// import products from "./components/products";
// const input = document.querySelector('.menu__input');

const searchEngine = {
    input: document.querySelector('.menu__input'),

    scrollDoc: function() {
        this.input.addEventListener('click', () => {
            const distance = document.querySelector('.products').offsetTop;
            const distanceWithoutMenu = distance - document.querySelector('.menu').offsetHeight;
            window.scrollTo({top: distanceWithoutMenu, behavior: 'smooth'});
        })
    },

    filterProducts: function(products) {
        this.input.addEventListener("keyup", () => {
                const inputValue = this.input.value.toLowerCase();
                const arr = products.filter(e => e.name.toLowerCase().includes(inputValue));
                render(arr);
            })
    }

};

searchEngine.scrollDoc();
// searchEngine.filterProducts();

export default searchEngine;

