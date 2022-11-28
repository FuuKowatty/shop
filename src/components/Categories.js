import './Categories.scss';
// import products from './products';
import render from '../renderProducts';


// const categoriesList = products.map(e => e.name).concat(['SALE']);

class Categories {
    constructor(tag) {
        this.tag = tag;
        this.categoriesList;
        // this.createCategoryBar();
        this.products;
        this.lastClickedBtn;
    }

    getCategoriesNames = (products) => {
        this.categoriesList = products.map(e => e.name).concat(['SALE']);
    }

    createCategoryBar = (products) => {
        this.products = products;
        const categoriesContainer = document.createElement('ul');
        categoriesContainer.classList.add('categories__list')
        this.categoriesList.forEach(e => {
            const li = document.createElement('li');
            const btn = this.createButton(e);
            btn.classList.add('categories__button');
            li.append(btn);
            categoriesContainer.append(li);
        })
        this.tag.append(categoriesContainer);
    }

    createButton = (text) => {
        const btn = document.createElement('button');
        btn.textContent = text;
        this.setEvent(btn);
        return btn
       
    }

    setEvent = (btn) => {
        btn.addEventListener('click', () => {
            if(btn.classList.contains('active')) {
                render(this.products)
            }
            else if(btn.textContent === 'SALE') {
                render(this.products.filter(e => e.sale )); //e.sale !== "FALSE" for API
            } else {
                render(this.products.filter(e => e.name === btn.textContent));
            }
            this.manageActiveButton(btn);
            this.lastClickedBtn = btn;
        })
    }

    manageActiveButton = (btn) => {
        if(this.lastClickedBtn === btn  && btn.classList.contains('active')) {
           btn.classList.remove('active');
           return
        } 
        document.querySelectorAll('.categories__button')
        .forEach(e => e.classList.remove('active'));
        btn.classList.add('active');
        
    }
}

const categories = new Categories(document.querySelector('.categories'));
export default categories;


        // <ul class="categories__list">
        //     <li class="categories__listElement">kat1</li>
        //     <li class="categories__listElement">kat2</li>
        //     <li class="categories__listElement">kat3</li>
        //     <li class="categories__listElement">kat4</li>
        //     <li class="categories__listElement">kat5</li>
        //     <li class="categories__listElement">kat6</li>
        //     <li class="categories__listElement">kat7</li>
        //     <li class="categories__listElement">kat8</li>
        //     <li class="categories__listElement">kat9</li>
        // </ul>