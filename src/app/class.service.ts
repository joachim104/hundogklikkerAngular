import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Class } from '../app/entities/class';
import { CustomerClass } from './entities/customerClass';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private http: HttpClient) { }

  private baseURL: string = environment.apiUrl;
  customerClass: CustomerClass;
  myMoment: moment.Moment = moment("");
  getAllClasses() {
    return this.http.get(environment.apiUrl + "/dogclasses");
  }

  createClass(class1: Class) {
    return this.http.post(environment.apiUrl + "/dogclasses", class1, { responseType: 'text' });
  }

  // evt brug http.delete her!!
  deleteClass(classId: number) {
    console.log("kører deleteClass");
    const class1 = {
      classID: classId,
      customerID: 0
    }
    return this.http.post(environment.apiUrl + "/delete", class1, { responseType: 'text' });
  }

  updateClass(class1) {
    console.log(class1);
    // var sd = new Date(class1.startDate);
    // var ed = new Date(class1.endDate);

    class1.startDate = moment(class1.startDate).format('DD/MM/YYYY');
    class1.endDate = moment(class1.endDate).format('DD/MM/YYYY');

    return this.http.post(environment.apiUrl + "/editdogclass", class1, { responseType: 'text' });
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
