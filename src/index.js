import "./index.scss";
import searchEngine from "./searchEngine";
import ShoppingCart from './components/ShoppingCart';
import Slider from "./components/Slider";
import Categories from "./components/Categories";
import render from "./renderProducts";
import products from './components/products';

export const Menu__ShopingCart = new ShoppingCart(document.querySelector('.menu__basket'));
const productSlider = new Slider(document.querySelector('.slider')); //section

// let products;

async function getData() {
    // await upladData();
    Categories.getCategoriesNames(products);
    Categories.createCategoryBar(products);
    searchEngine.filterProducts(products);
    render(products);

}

// function upladData() {
//     return fetch("https://v1.nocodeapi.com/fuukowatty/google_sheets/RQXOBLCJFnflJneN?tabId=API")
//         .then(response => response.json())
//         .then(result => products = result['data'])
//         .catch(error => console.log('error', error));
//     };

getData();




