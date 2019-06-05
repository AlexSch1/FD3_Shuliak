
class Scales {
    protected products: Array<Product> = [];

    public add(...prod: Array<Product>): void {
        prod.forEach((value)=>{
            this.products.push(value);
        })
    }

    public getSumScale(): number {
        let sum: number = 0;
        this.products.forEach((prod: Product) => {
            sum += prod.scale;
        });
        return sum;
    }

    public getNameList(): string[] {
        let nam: string[] = [];
        this.products.forEach((prod: Product) => {
            nam.push(prod.name);
        });
        return nam;
    }
}


class Product {
    constructor(public name: string, public price: number, public scale: number) {
    }

    public getScale():number {
        return this.scale
    }
    public getName():string {
        return this.name;
    }
}

class Apple extends Product {};
class Tomato extends Product {};

let apple1 = new Apple('apple1', 100, 2);
let apple12= new Apple('apple2', 50, 2.1);
let tomato1 = new Tomato('tomato1', 20, 0.5);

let scale = new Scales();

scale.add(apple1, apple12, tomato1);
scale.getSumScale();
scale.getNameList();

