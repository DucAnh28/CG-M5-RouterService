import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  id: number;
  productForm: FormGroup;

  constructor(private productService: ProductService, private activateRoute: ActivatedRoute) {
    this.activateRoute.paramMap.subscribe((paraMap: ParamMap) => {
      this.id = +paraMap.get('id');
      this.getProduct(this.id);
    })
  }

  ngOnInit(): void {
  }

  getProduct(id: number) {
    return this.productService.findProductById(id).subscribe(product => {
      this.productForm = new FormGroup({
        id: new FormControl(product.id),
        name: new FormControl(product.name),
        price: new FormControl(product.price),
        description: new FormControl(product.description),
      });
    });
  }

  submit() {
    console.log(this.productForm.value)
    const productEdit = this.productForm.value;
    this.productService.editProduct(productEdit.id, productEdit).subscribe(() => {
      alert("Cap nhat thanh cong")
    });
  }
}
