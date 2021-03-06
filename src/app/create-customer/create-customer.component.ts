import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Customer } from '../entities/customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {

  registerCustomerForm: any;

  constructor(private fb: FormBuilder, private customerService: CustomerService, private router: Router, public dialog: MatDialog) { }


  ngOnInit() {

    this.registerCustomerForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      address: [''],
      email: [''],
      password: [''],
      dogName: [''],
      dogAge: [''],
      dogRace: [''],
      isAdmin: false,
    });
  }

  onSubmit() {
    // let customer = this.registerCustomerForm.value as Customer;

    this.customerService.createCustomer(this.registerCustomerForm.value).subscribe(res => {
      console.log(res);
      this.router.navigate(['/login']);
    });
  }
}
