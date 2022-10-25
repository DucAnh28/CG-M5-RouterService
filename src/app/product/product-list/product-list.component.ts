import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../product";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  findProductById(id: number) {
    this.productService.findProductById(id);
  }

  getAll() {
    this.productService.getAll().subscribe(productList =>{
      this.products = productList;
    },error => {
      console.log(error);
    },()=>{
      console.log('Thanh Cong')
    });
  }

  deleteProduct(id: number | undefined) {
    this.productService.deleteProduct(id).subscribe(()=>{
      this.getAll();
    })
  }
}
