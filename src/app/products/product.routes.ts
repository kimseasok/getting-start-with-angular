import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductResolverService } from './product-resolver.service';

export const productRoutes = [
  { path: 'products', component: ProductListComponent },
  {
    path: 'products/:id',
    component: ProductDetailComponent,
    resolve: { product: ProductResolverService }
  },
  {
    path: 'products/:id/edit',
    component: ProductEditComponent,
    resolve: { product: ProductResolverService }
  }
];
