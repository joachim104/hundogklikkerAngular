import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ClassService } from '../class.service';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-customer-class-cards',
  templateUrl: './customer-class-cards.component.html',
  styleUrls: ['./customer-class-cards.component.scss']
})
export class CustomerClassCardsComponent implements OnInit {

  classes: any = [];
  myMoment: moment.Moment = moment("");
  loading: boolean = true;
  customerClass: any;
  clickedClass: any;

  // evt Class type her
  @Input() class: any;

  @Output() classEditClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor(private classService: ClassService, private authService: AuthService, private http: HttpClient, private router: Router, public dialog: MatDialog) { }


  openDialog(class1): void {
    console.log("klasse: ", class1)
    this.clickedClass = class1;
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onCancelClick(class1);
        this.fetchData();
      }
    });
  }

  getClassObject() {
    return this.clickedClass;
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.loading = true;
    this.classService.getCustomerClasses(this.authService.currentUser).subscribe(response => {
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

  onCancelClick(class1) {
    this.classService.cancelClass(class1.classID, this.authService.currentUser.customerID).subscribe(res => {
      console.log(res);
    });
  }

}
