import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // we dependency inject the HttpClient so we can do an AJAX call
  constructor(private http: HttpClient) { }

  private baseURL: string = environment.apiUrl;

  getUserDetails(username, password) {
    // post these details to API server and return user info if correct
    return this.http.post('/api/auth.php', {
      username,
      password
    }).subscribe(data => {
      console.log(data);
    })
  }
}
