
export class Product {
    public name: string;
    public description: string;
    public imagePath: string;
    public productPrice: number;

    constructor(name: string, desc: string, imagepath: string,
        price: number) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagepath;
        this.productPrice = price;

    }
}