import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { ClassService } from '../class.service';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.scss']
})
export class CreateClassComponent implements OnInit {

  registerClassForm: any;

  constructor(private fb: FormBuilder, private classService: ClassService, private router: Router) { }

  ngOnInit() {

    this.registerClassForm = this.fb.group({
      day: [''],
      time: [''],
      startDate: [''],
      endDate: ['']
    });
  }

  dayControl = new FormControl('', [Validators.required]);

  days: any[] = [
    { name: 'Mandag'},
    { name: 'Tirsdag'},
    { name: 'Onsdag'},
    { name: 'Torsdag'},
    { name: 'Fredag'},
    { name: 'Lørdag'},
    { name: 'Søndag'}
  ];


  onSubmit() {
    // let customer = this.registerCustomerForm.value as Customer;

    console.log(this.registerClassForm.value);

    this.classService.createClass(this.registerClassForm.value).subscribe(res => {
      console.log(res);
    });
  }

}
