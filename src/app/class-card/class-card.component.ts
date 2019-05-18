import { Component, OnInit } from '@angular/core';
import { ClassService } from '../class.service';
import * as moment from 'moment';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-class-card',
  templateUrl: './class-card.component.html',
  styleUrls: ['./class-card.component.scss']
})
export class ClassCardComponent implements OnInit {

  classes: any = [];
  myMoment: moment.Moment = moment("");
  loading: boolean = true;

  constructor(private classService: ClassService, private authService: AuthService) { }

  

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

  onDeleteClick() {
    console.log("kører Delete");
  }

  onEditClick() {
    console.log("kører Edit");
  }

  onApplyClick() {
    console.log("kører Apply");
  }

  onCancelClick() {
    console.log("kører Cancel");
  }


}
