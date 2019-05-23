import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Class } from '../app/entities/class';
import { CustomerClass } from './entities/customerClass';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private http: HttpClient) { }

  private baseURL: string = environment.apiUrl;
  customerClass: CustomerClass;

  getAllClasses() {
    return this.http.get(environment.apiUrl + "/dogclasses");
  }

  createClass(class1: Class) {
    return this.http.post(environment.apiUrl + "/dogclasses", class1, { responseType: 'text' });
  }

  // evt brug http.delete her!!
  deleteClass(classId: number) {
    console.log("kører deleteClass");
    return this.http.post(environment.apiUrl + "/delete", classId, { responseType: 'text' });
  }

  editClass(class1) {
    console.log(class1);
    return this.http.put(environment.apiUrl + class1.classID, class1, {responseType: 'text'});
    // return this.http.put(environment.apiUrl + sitter._id, sitter, {responseType: 'text'});
  }

  applyClass(classId: number, customerId: number) {
    let customer = {
      classID: classId,
      customerID: customerId
    }
    console.log("customer object: ", customer)
    return this.http.post(environment.apiUrl + "/apply", customer, { responseType: 'text' });
  }

  // evt brug http.delete her!!
  cancelClass(classId: number, customerId: number) {
    let customer = {
      classID: classId,
      customerID: customerId
    }
    return this.http.post(environment.apiUrl + "/customercancel", customer, { responseType: 'text' });
  }
}
