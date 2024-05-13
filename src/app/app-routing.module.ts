import { ForgetpassComponent } from './components/forgetpass/forgetpass.component';
import { authGuard } from './shared/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignLayoutComponent } from './components/sign-layout/sign-layout.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { NotFoundedComponent } from './components/not-founded/not-founded.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponent } from './components/products/products.component';
import { DetailsComponent } from './components/details/details.component';
import { CatComponent } from './components/cat/cat.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

const routes: Routes = [
  {path:'',component:SignLayoutComponent,children:[
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'forgetpass',component:ForgetpassComponent}
  ]},
  {path:'',component:MainLayoutComponent,
  canActivate:[authGuard]
  ,children:[
    {path:'home',component:HomeComponent},
    {path:'details/:id',component:DetailsComponent},
    {path:'payment/:id',component:PaymentComponent},
    {path:'cat/:id',component:CatComponent},
    {path:'cart',component:CartComponent},
    {path:'wishlist',component:WishlistComponent},
    {path:'allorders',component:AllordersComponent},
    {path:'brands',component:BrandsComponent},
    {path:'categories',component:CategoriesComponent},
    {path:'products',component:ProductsComponent},
    {path:'checkout',component:CheckoutComponent}
  ]},
  {path:'**',component:NotFoundedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
