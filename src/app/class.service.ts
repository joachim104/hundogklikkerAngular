import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Class } from '../app/entities/class';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private http: HttpClient) { }

  // private baseURL: string = environment.apiUrl;

  createClass(class1: Class ){
    return this.http.post(environment.apiUrl + "/values", class1, {responseType: 'text'});
  }

}
