import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFireAuthModule } from 'angularfire2/auth'
import { RouterModule } from '@angular/router';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { DataTablesModule } from 'angular-datatables';
import { Observable } from 'rxjs-compat';
import { environment } from '../environments/environment';
//import { AuthService } from './auth.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersuccessComponent } from './ordersuccess/ordersuccess.component';
import { MyordersComponent } from './myorders/myorders.component';
import { AdminproductsComponent } from './adminproducts/adminproducts.component';
import { AdminordersComponent } from './adminorders/adminorders.component';
import { LoginComponent } from './login/login.component';
import { ProductformComponent } from './productform/productform.component';
import { ProductFilterComponent } from './productfilter/productfilter.component';
import { ProductcardComponent } from './productcard/productcard.component';
import { ProductquantityComponent } from './productquantity/productquantity.component';
import { ShoppingCartSummaryComponent } from './shoppingcartsummary/shoppingcartsummary.component';
import { ShippingFormComponent } from './shippingform/shippingform.component';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { UserService } from './user.service';
import { CategoryService } from './category.service';
import { ProductService } from './product.service';
import { ShoppingCartService } from './shopping-cart.service';
import { OrderService } from './order.service';
import { ErrorComponent } from './error/error.component';
import { AdminAuthGuard } from './admin-auth-guard.service';
import { Server } from 'https';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingcartComponent,
    CheckoutComponent,
    OrdersuccessComponent,
    MyordersComponent,
    AdminproductsComponent,
    AdminordersComponent,
    LoginComponent,
    ProductformComponent,
    ProductFilterComponent,
    ProductcardComponent,
    ProductquantityComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
    ErrorComponent,
    DataTablesModule
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    CustomFormsModule,
  	AngularFireModule.initializeApp(environment),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    //NgbModule.forRoot(),
    //RouterModule.forRoot([
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    AuthGuardService,
    AdminAuthGuard,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
