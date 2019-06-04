
interface IScalable {
    getScale(): number;
    getName(): string;
}

class Scales2 {
    protected products: Array<IScalable> = [];

    public add(...prod: Array<IScalable>): void {
        prod.forEach((value) => {
            this.products.push(value);
        })
    }

    public getSumScale(): void {
        let sum: number = 0;
        this.products.forEach((prod: IScalable) => {
            sum += prod.getScale();
        });
        console.log(sum);
    }

    public getNameList(): void {
        let nam: string[] = [];
        this.products.forEach((prod: IScalable) => {
            nam.push(prod.getName());
        });
        console.log(nam);
    }
}


class Product {
    constructor(public name: string, public price: number, public scale: number) { }
}

class Apple extends Product implements IScalable {
    getScale(): number {
        return this.scale
    }
    getName(): string {
        return this.name
    }
};

class Tomato extends Product implements IScalable {
    getScale(): number {
        return this.scale
    }
    getName(): string {
        return this.name
    }
};

let apple1 = new Apple('apple1', 100, 2);
let apple12 = new Apple('apple2', 50, 2.1);
let tomato1 = new Tomato('tomato1', 20, 0.5);

let scale = new Scales2();

scale.add(apple1, apple12, tomato1);
scale.getSumScale();
scale.getNameList();

