import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CreateClassComponent } from './create-class/create-class.component';
import { ClassListComponent } from './class-list/class-list.component';
import { ClassCardComponent } from './class-card/class-card.component';
import { SingleClassComponent } from './single-class/single-class.component';
import { TermsComponent } from './terms/terms.component';
import { PracticalComponent } from './practical/practical.component';



import {
  AuthGuardService as AuthGuard
} from './auth-guard.service';

import { from } from 'rxjs';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create-customer', component: CreateCustomerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'single-class', component: SingleClassComponent },
  { path: 'class-list', component: ClassListComponent },
  { path: 'class-card', component: ClassCardComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'practical', component: PracticalComponent },
  {
    path: 'create-class',
    component: CreateClassComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
