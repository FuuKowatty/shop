import { Product } from './components/Product';

export default function render(arr) {
    document.querySelector('.products__container').innerHTML = '';
    if(!arr.length) {
        document.querySelector('.products__container')
            .innerHTML = 'NO PRODUCTS';
    }
    arr.forEach(e => {
        new Product(e.img, e.name, e.desc, e.price)
})
}