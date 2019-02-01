import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { MessageService } from 'src/app/messages/message.service';

@Component({
  selector: 'pm-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  pageTitle: string;
  productId: number;
  products: Product[];
  product: any;
  errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private smg: MessageService
  ) {}

  getProductById(products: Product[], id: number): Product[] {
    return products.filter((product: Product) => {
      return product.productId === id;
    });
  }

  ngOnInit() {
    const productId = +this.route.snapshot.paramMap.get('id');
    if (productId === 0) {
      this.productId = 0;
      this.pageTitle = 'Add new product';
    } else {
      this.productId = productId;
      this.pageTitle = 'Edit product';
    }

    this.productService.getProducts().subscribe(
      products => {
        [this.product] = this.getProductById(products, productId);
      },
      error => {
        this.errorMessage = <any>error;
      }
    );
  }
}
