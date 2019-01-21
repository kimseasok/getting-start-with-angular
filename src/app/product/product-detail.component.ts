import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = `Product Detial`;
  products: Product[];
  singleProduct: Product[];
  product: Product;

  errMsg: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) { }

  getProductById(products: Product[], id: number): Product[] {
    return products.filter((product: Product) => {
      return product.productId === id;
    });
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProducts().subscribe(products => {
      this.products = this.getProductById(products, id);
      console.log(this.products)
    },
      error => { this.errMsg = <any>error });
  }

}
