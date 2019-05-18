import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import { FormBuilder, Validators } from '@angular/forms';
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
    this.loginForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.minLength(5)]],
        password: ['', Validators.required]
      }
    )
  }

  onSubmit(loginForm: any) {
    if (loginForm.valid) {
      // Send request to back-end to validate login.
      this.authService.login().subscribe(result => {
        // Navigate based on a certain condition.
        this.router.navigate(['/class-card']); // her kan man bruge router-klassen fordi vi har depencies injected router klassen længere op
      });
    } else {
      // Punish user for not filling out fields.
    }
  }

  // onLogin() {
  //   let customer = this.loginForm.value as Customer;
  //   // const target = event.target;
  //   // const username = target.querySelector('#username').value;
  //   // const password = target.querySelector('#password').value;

  //   // console.log(username, password);

  //   //   this.authService.getUserDetails(username, password)

  //   // this.authService.isAuthenticated();
  // }

}
