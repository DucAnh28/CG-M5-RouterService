import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  @Input("id-edit-product") id : number = 0;

  productForm: FormGroup ;

  constructor(private productService : ProductService) {
    const product = this.productService.productTemp;
    this.productForm = new FormGroup({
      id: new FormControl(product.id),
      name: new FormControl(product.name),
      price: new FormControl(product.price),
      description: new FormControl(product.description),
    });
  }

  ngOnInit(): void {
  }

  submit() {
    const productEdit2 = this.productForm.value;
    this.productService.editProduct(productEdit2.id,productEdit2);
    this.productForm.reset();
  }
}
