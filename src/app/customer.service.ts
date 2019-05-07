import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Customer } from '../app/entities/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  private baseURL: string = environment.apiUrl;

  public getAllCustomers() {
    // return this.http.get(this.baseURL);
  }

  createCustomer(customer: Customer ){
    return this.http.post(environment.apiUrl + "/values", customer, {responseType: 'text'});
  }

  deleteCustomer(customer: Customer){
    // return this.http.delete(environment.apiUrl + sitter._id, {responseType: 'text'});
  }

  updateCustomer(customer: Customer){
    // return this.http.put(environment.apiUrl + sitter._id, sitter, {responseType: 'text'});
  }

}
