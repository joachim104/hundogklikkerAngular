import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../entities/customer';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: any;
  private baseURL: string = environment.apiUrl;
  currentCustomer: Customer;


  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.loginForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.minLength(5)]],
        password: ['', Validators.required]
      }
    )
  }

  onSubmit(loginForm: any) {
    let customer = this.loginForm.value as Customer;
    if (loginForm.valid) {
      // Send request to back-end to validate login.
      this.authService.login(customer).subscribe(result => {
        // Navigate based on a certain condition.
        this.router.navigate(['/class-card']); // her kan man bruge router-klassen fordi vi har depencies injected router klassen længere op
      });
    } else {
      // Punish user for not filling out fields.
    }
  }
}
