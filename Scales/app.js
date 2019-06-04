// type Prod = { name: string, price: number, scale: number };
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Scales = /** @class */ (function () {
    function Scales() {
        this.products = [];
    }
    Scales.prototype.add = function () {
        var _this = this;
        var prod = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            prod[_i] = arguments[_i];
        }
        prod.forEach(function (value) {
            _this.products.push(value);
        });
    };
    Scales.prototype.getSumScale = function () {
        var sum = 0;
        this.products.forEach(function (prod) {
            sum += prod.scale;
        });
        console.log(sum);
    };
    Scales.prototype.getNameList = function () {
        var nam = [];
        this.products.forEach(function (prod) {
            nam.push(prod.name);
        });
        console.log(nam);
    };
    return Scales;
}());
var Product = /** @class */ (function () {
    function Product(name, price, scale) {
        this.name = name;
        this.price = price;
        this.scale = scale;
    }
    Product.prototype.getScale = function () {
        console.log(this.scale);
    };
    Product.prototype.getName = function () {
        console.log(this.name);
    };
    return Product;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Apple;
}(Product));
;
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Tomato;
}(Product));
;
var apple1 = new Apple('apple1', 100, 2);
var apple12 = new Apple('apple2', 50, 2.1);
var tomato1 = new Tomato('tomato1', 20, 0.5);
var scale = new Scales();
scale.add(apple1, apple12, tomato1);
scale.getSumScale();
scale.getNameList();
//# sourceMappingURL=app.js.map