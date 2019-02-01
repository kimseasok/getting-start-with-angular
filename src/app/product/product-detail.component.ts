import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = `Product Detial`;
  product: Product;
  errMsg: string;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  getProductById(products: Product[], id: number): Product[] {
    return products.filter((product: Product) => {
      return product.productId === id;
    });
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProducts().subscribe(
      products => {
        [this.product] = this.getProductById(products, id);
      },
      error => {
        this.errMsg = <any>error;
      }
    );
  }
}
