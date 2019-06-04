



// type Prod = { name: string, price: number, scale: number };

class Scales {
    protected products: Array<any> = [];

    public add(...prod: Array<object>): void {
        prod.forEach((value)=>{
            this.products.push(value);
        })
    }

    public getSumScale(): void {
        let sum: number = 0;
        this.products.forEach((prod) => {
            sum += prod.scale;
        });
        console.log(sum);
    }

    public getNameList(): void {
        let nam: string[] = [];
        this.products.forEach((prod) => {
            nam.push(prod.name);
        });
        console.log(nam);
    }
}


class Product {
    constructor(protected name: string, protected price: number, protected scale: number) {
    }

    public getScale():void {
        console.log(this.scale);
    }
    public getName():void {
        console.log(this.name);
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

