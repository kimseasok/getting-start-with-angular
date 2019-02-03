import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductResolverService } from './product-resolver.service';
import { ProductEditInfoComponent } from './product-edit/product-edit-info.component';
import { ProductEditTagsComponent } from './product-edit/product-edit-tags.component';
import { AuthGuard } from '../user/auth.guard';
import { ProductEditGuard } from './product-edit/product-edit.guard';

export const productRoutes = [
  {
    path: 'products',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: ProductListComponent },
      {
        path: ':id',
        component: ProductDetailComponent,
        resolve: { product: ProductResolverService }
      },
      {
        path: ':id/edit',
        component: ProductEditComponent,
        canDeactivate: [ProductEditGuard],
        resolve: { product: ProductResolverService },
        children: [
          { path: '', redirectTo: 'info', pathMatch: 'full' },
          { path: 'info', component: ProductEditInfoComponent },
          { path: 'tags', component: ProductEditTagsComponent }
        ]
      }
    ]
  }
];
