import './Categories.scss';
import { products } from './products';

const categoriesList = products.map(e => e.name);
categoriesList.push('SALE')

export default class Categories {
    constructor(tag) {
        this.tag = tag;
        this.categoriesList = categoriesList;
        this.createCategoryBar()
    }

    createCategoryBar = () => {
        const categoriesContainer = document.createElement('ul');
        categoriesContainer.classList.add('categories__list')
        this.categoriesList.forEach((e, i) => {
            const li = document.createElement('li');
            li.textContent = e;
            categoriesContainer.append(li);
        })
        this.tag.append(categoriesContainer);
    }


}




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