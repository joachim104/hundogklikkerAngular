import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../entities/customer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: any;

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  onLogin() {

    let customer = this.loginForm.value as Customer;
    // const target = event.target;
    // const username = target.querySelector('#username').value;
    // const password = target.querySelector('#password').value;

    // console.log(username, password);

    //   this.authService.getUserDetails(username, password)

      this.authService.login(customer);
  }

}
