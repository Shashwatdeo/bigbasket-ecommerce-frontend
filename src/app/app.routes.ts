import { Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { CategoriesComponent } from './pages/admin/categories/categories.component';
import { LandingComponent } from './pages/website/landing/landing.component';
import { CategoryProductsComponent } from './pages/website/category-products/category-products.component';
import { WebProductsComponent } from './pages/website/web-products/web-products.component';
import { CheckoutComponent } from './pages/website/checkout/checkout.component';
import { CustomerOrdersComponent } from './pages/website/customer-orders/customer-orders.component';
import { authGuard } from './shared/guards/auth.guard';
import { CartComponent } from './pages/admin/cart/cart.component';
import { AboutUsComponent } from './pages/website/about-us/about-us.component';
import { ContactUsComponent } from './pages/website/contact-us/contact-us.component';
import { TermsAndConditionsComponent } from './pages/website/terms-and-conditions/terms-and-conditions.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'AllProducts',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: 'AllProducts',
        component: WebProductsComponent,
        title: 'All-Products'
      },
      {
        path: 'products/:id',
        component: CategoryProductsComponent
      },
      {
        path: 'cart',
        component: CartComponent
      },
      // Add route for About Us

      // Add route for Contact Us
      
    ]
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [authGuard],
    title: 'Checkout'
  },
  {
    path: 'order-history',
    component: CustomerOrdersComponent,
    canActivate: [authGuard],
    title: 'Your Orders'
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'products',
        component: ProductsComponent,
        title: 'Products'
      },
      {
        path: 'category',
        component: CategoriesComponent,
        title: 'Category'
      }
    ]
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  // Add route for Terms and Conditions
  {
    path: 'terms-and-conditions',
    component: TermsAndConditionsComponent
  }

];
