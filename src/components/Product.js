import './Product.scss';
import { actuallOrder } from './Order';
import { Menu__ShopingCart } from '..';


export class Product {

    constructor(src, name, desc, price) {
        this.tag = document.querySelector('.products__container');
        this.src = src;
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.createElements();
        this.setEvents();
    }

    getPrice = () => +this.price;
    getName = () => this.name;

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
            <div class="products__itemsWrapper">
                <div class="products__price">${this.price}$/liter</div>
                <button class="products__button">Add to Basket</button>
            </div>
        `;
        this.apppendElement(prod);
    }


    setEvents() {
            const btn = [...document.querySelectorAll('.products__button')].pop();
            btn.addEventListener('click', () => {
                actuallOrder.addProduct(this);
                Menu__ShopingCart.renderElements();
                Menu__ShopingCart.togglePopScreenBtns();

            })
            
    }
}

