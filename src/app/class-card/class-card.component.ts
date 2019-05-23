import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ClassService } from '../class.service';
import * as moment from 'moment';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CustomerClass } from '../entities/customerClass';
import { Router } from '@angular/router';


@Component({
  selector: 'app-class-card',
  templateUrl: './class-card.component.html',
  styleUrls: ['./class-card.component.scss']
})
export class ClassCardComponent implements OnInit {

  classes: any = [];
  myMoment: moment.Moment = moment("");
  loading: boolean = true;
  customerClass: any;

  // evt Class type her
  @Input() class: any;

  @Output() classEditClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor(private classService: ClassService, private authService: AuthService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.loading = true;
    this.classService.getAllClasses().subscribe(response => {
      this.classes = response;
      this.classes.forEach(function (class1) {
        class1.startDate = moment(class1.startDate).format('DD/MM/YYYY');
        class1.endDate = moment(class1.endDate).format('DD/MM/YYYY');
      });
      this.loading = false;
    });
  }

  checkLogin(): Boolean {
    return this.authService.isLoggedIn;
  };

  checkAdmin(): Boolean {
    return this.authService.isAdmin;
  };

  onDeleteClick(class1) {
    console.log("kører Delete");
    this.classService.deleteClass(class1.classID).subscribe(res => {
      console.log(res);
    });
  }

  onEditClick(class1) {
    this.classEditClicked.emit(this.class);
    this.router.navigate(["/edit-class/" + class1.classID]);
  }

  onApplyClick(class1) {
    this.classService.applyClass(class1.classID, this.authService.currentUser.customerID).subscribe(res => {
      console.log(res);
      this.router.navigate(['customer-class-cards']);
    });
  };

  onCancelClick(class1) {
    console.log("kører Cancel");
    this.classService.cancelClass(class1.classID, this.authService.currentUser.customerID).subscribe(res => {
      console.log(res);
    });
  }
}
