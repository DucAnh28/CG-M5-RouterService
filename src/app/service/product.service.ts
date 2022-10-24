import {Injectable} from '@angular/core';
import {Product} from "../product/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [{
    id: 1,
    name: 'IPhone 12',
    price: 2400000,
    description: 'New'
  }, {
    id: 2,
    name: 'IPhone 11',
    price: 1560000,
    description: 'Like new'
  }, {
    id: 3,
    name: 'IPhone X',
    price: 968000,
    description: '97%'
  }, {
    id: 4,
    name: 'IPhone 8',
    price: 7540000,
    description: '98%'
  }, {
    id: 5,
    name: 'IPhone 11 Pro',
    price: 1895000,
    description: 'Like new'
  }];

  constructor() {
  }

  productTemp : Product = {}

  getAll() {
    return this.products;
  }

  findProductById(id:number) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id){
        this.productTemp = this.products[i]  ;
      }
    }
  }

  saveProduct(product: Product) {
    this.products.push(product);
  }

  deleteProduct(id: number) {
    const indexOfObject = this.products.findIndex((object) => {
      return object.id === id;
    });
    console.log(indexOfObject);
    this.products.splice(indexOfObject,1);
    console.log(this.getAll());
  }

    editProduct(id: number | undefined, temp: Product){
    const indexOfObject = this.products.findIndex((object) => {
      return object.id === id;
    });
    console.log(indexOfObject);
    this.products[indexOfObject]= temp;
  }
}
