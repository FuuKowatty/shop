class Order {
    constructor(name, price) {
        this.nr;
        this.date = new Date();
        this.products = [];
    }

    addProduct = (prod) => {
        this.products.push(prod)
    }

    getTotal = () => 
        this.products.reduce((ac,v) => 
            ac += v.getPrice()
        ,0)
        

}

export const actuallOrder = new Order('1', new Date() );