import "./index.scss";
import Slider from "./components/Slider";
import Categories from "./components/Categories";
import { Product } from './components/Product';
import { products }from './components/products';

const productSlider = new Slider(document.querySelector('.slider')); //section
const categories = new Categories(document.querySelector('.categories'));
products.forEach(e => {
    new Product(e.img, e.name, e.desc, e.price)
})






