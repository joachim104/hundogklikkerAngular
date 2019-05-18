import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CreateClassComponent } from './create-class/create-class.component';
import { ClassCardComponent } from './class-card/class-card.component';
import { JwtModule } from '@auth0/angular-jwt';
import { SingleClassComponent } from './single-class/single-class.component';
import { TermsComponent } from './terms/terms.component';
import { PracticalComponent } from './practical/practical.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    LoginComponent,
    HomeComponent,
    ContactComponent,
    CreateClassComponent,
    ClassCardComponent,
    SingleClassComponent,
    TermsComponent,
    PracticalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
