import {
  Component,
  OnInit,
  ViewChild,
  ResolvedReflectiveProvider
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { ProductResolved } from '../product';

@Component({
  templateUrl: './product-edit-info.component.html'
})
export class ProductEditInfoComponent implements OnInit {
  @ViewChild(NgForm) productForm: NgForm;
  product: ProductResolved;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.parent.data.subscribe(data => {
      if (this.productForm) {
        this.productForm.reset();
      }
      this.product = data['product'].product;
    });
  }
}
