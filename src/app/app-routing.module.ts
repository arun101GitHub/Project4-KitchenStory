import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminordersComponent } from './adminorders/adminorders.component';
import { AdminproductsComponent } from './adminproducts/adminproducts.component';
import { AuthGuardService } from './auth-guard.service';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyordersComponent } from './myorders/myorders.component';
import { OrdersuccessComponent } from './ordersuccess/ordersuccess.component';
import { ProductcardComponent } from './productcard/productcard.component';
import { ProductFilterComponent } from './productfilter/productfilter.component';
import { ProductformComponent } from './productform/productform.component';
import { ProductquantityComponent } from './productquantity/productquantity.component';
import { ProductsComponent } from './products/products.component';
import { ShippingFormComponent } from './shippingform/shippingform.component';
import { ShoppingCartSummaryComponent } from './shoppingcartsummary/shoppingcartsummary.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
const routes: Routes = [
  {path:'bsnavbar', component:BsNavbarComponent},
  {path:'adminorders', component:AdminordersComponent},
  {path:'error', component:ErrorComponent},
  {path:'home', component:HomeComponent},
  {path:'products', component:ProductsComponent},
  {path:'checkout', component:CheckoutComponent, canActivate:[AuthGuardService]},
  {path:'ordersuccess/:id', component:OrdersuccessComponent, canActivate:[AuthGuardService]},
  {path:'myorders', component:MyordersComponent, canActivate:[AuthGuardService]},
  {path:'adminproducts', component:AdminproductsComponent},
  {path:'adminorders', component:AdminordersComponent},
  {path:'login', component:LoginComponent},
  {path:'admin/products', component:ProductformComponent, canActivate:[AuthGuardService]},
  {path:'productfilter', component:ProductFilterComponent},
  {path:'productcard', component:ProductcardComponent},
  {path:'productquantity', component:ProductquantityComponent},
  {path:'shippingform', component:ShippingFormComponent},
  {path:'shoppingcart', component:ShoppingcartComponent},
  {path:'shoppingcartsummary', component:ShoppingCartSummaryComponent},
  {path:'', component:LoginComponent},
  {path:'**', component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
