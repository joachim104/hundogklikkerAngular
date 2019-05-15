import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Customer } from './entities/customer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // we dependency inject the HttpClient so we can do an AJAX call
  constructor(private http: HttpClient) { }



  login(customer: Customer) {
    console.log("customer object", customer);
    // post these details to API server and return user info if correct
    return this.http.post(environment.apiUrl + '/customerlogin', {
      customer
    }).subscribe(data => {
      console.log("API svar: ", data);
    })
  }
}
