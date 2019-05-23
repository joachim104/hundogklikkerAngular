import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Customer } from './entities/customer';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // we dependency inject the HttpClient so we can do an AJAX call
  constructor(private http: HttpClient, private router: Router) { }

  isLoggedIn = false;
  isAdmin = false;
  currentUser: any;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(customer): Observable<boolean> {
    // IRL: Call a ws, authenticate user, save user info or token in auth.service.
    // check evt her om customer er admin og derefter sæt isAdmin til true;
    return of(true).pipe(
      delay(1000),
      tap(val => {
        if (val == true) {
          this.loginCall(customer);
        }
      })
    );
  }

  loginCall(customer) {
    this.http.post(environment.apiUrl + "/customerlogin", customer, { responseType: 'text' }).subscribe(response => {
      let obj = JSON.parse(response);
      this.currentUser = obj;
      if (this.currentUser.email == null) {
        this.isLoggedIn = false;
        this.router.navigate(['/class-card']);
      }
      else if (this.currentUser.isAdmin == true) {
        this.isLoggedIn = true;
        this.isAdmin = true;
      }
      else {
        this.isLoggedIn = true;
      }
    });
  }

  logout(): void {
    console.log("LOGOUT!");
    this.isAdmin = false;
    this.isLoggedIn = false;
  }
}
