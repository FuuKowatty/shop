import './Product.scss';

export class Product {

    constructor(src, name, desc, price) {
        this.tag = document.querySelector('.products__container');
        this.src = src;
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.createElements();
    }

    apppendElement = (prod) => {
        this.tag.append(prod)
    }

    createElements = () => {
        const prod = document.createElement('div');
        this.setContent(prod);
    }

    setContent = (prod) => {
        prod.classList.add('products__product');
        prod.innerHTML = `
            <img class="products__img" src="${this.src}" alt="${this.name} photo">
            <div class="products__name">${this.name}</div> 
            <div class="products__desc">${this.desc}</div>
            <div class="products__price">${this.price}</div>
            <button class="products__button">Dodaj do koszyka</button>
        `;
        this.apppendElement(prod);
    }
}

{/* <div class="products__product">
<img src="https://placeimg.com/150/200/sepia" alt="">
<div class="products__name">Product Name</div> 
<div class="products__desc">
'NEVAS Water combines the water of two natural springs and thus the best of mineralization and taste. As the first cuvée in the water segment, mixed with fine sparkling carbon dioxide, NEVAS Water not only convinces with its unmistakable taste, but also with the highest quality.',
</div>
<div class="products__price">999</div>
<button class="products__button">Dodaj do koszyka</button>
</div> */}

