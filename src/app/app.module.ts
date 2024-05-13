import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundedComponent } from './components/not-founded/not-founded.component';
import { NavSignComponent } from './components/nav-sign/nav-sign.component';
import { NavMainComponent } from './components/nav-main/nav-main.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { SignLayoutComponent } from './components/sign-layout/sign-layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './components/details/details.component';
import { CatComponent } from './components/cat/cat.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SearchPipe } from './search.pipe';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './components/payment/payment.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { MyHttpInterceptor } from './my-http.interceptor';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingInterceptor } from './loading.interceptor';
import { ForgetpassComponent } from './components/forgetpass/forgetpass.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    ProductsComponent,
    BrandsComponent,
    CategoriesComponent,
    RegisterComponent,
    LoginComponent,
    NotFoundedComponent,
    NavSignComponent,
    NavMainComponent,
    MainLayoutComponent,
    SignLayoutComponent,
    FooterComponent,
    DetailsComponent,
    CatComponent,
    SearchPipe,
    PaymentComponent,
    AllordersComponent,
    ForgetpassComponent,
    WishlistComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule,
     FormsModule,
     ToastrModule.forRoot(),
     CommonModule,
     NgxPaginationModule,
     NgxSpinnerModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:MyHttpInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:LoadingInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
