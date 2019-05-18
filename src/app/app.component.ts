import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hundogKlikkerFrontend';

  constructor(private authService: AuthService, public router: Router) { }

  // navLinks: string[] = ["/home", "/class-card", "/single-class"]

  navLinks: any = [
    {path: "/", label: 'Hund & Klikker'},
    {path: "/class-card", label: 'Hold & Kursus'},
    {path: "/single-class", label: 'Enetimer'},
    {path: "/practical", label: 'Praktisk'},
    {path: "/terms", label: 'Betingelser'},
    {path: "/login", label: 'Login'},
    {path: "/create-customer", label: 'Register'},
];

  checkLogin(): Boolean {
    return this.authService.isLoggedIn;
  };

}
