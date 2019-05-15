import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.scss']
})
export class ClassListComponent implements OnInit {

  constructor() { }
  

  displayedColumns: string[] = ['day', 'time', 'startdate', 'enddate'];

  dataSource  = [
    {day: 'Mandag', time: '16:30', startdate: '14-05-2019', enddate: '14-06-2019'},
    {day: 'Onsdag', time: '18:30', startdate: '14-05-2019', enddate: '14-05-2019'},
    {day: 'Fredag', time: '11:00', startdate: '14-05-2019', enddate: '14-05-2019'},
    {day: 'Mandag', time: '10:00', startdate: '03-07-2019', enddate: '03-08-2019'},
    {day: 'Onsdag', time: '09:00', startdate: '03-07-2019', enddate: '03-08-2019'},
    {day: 'Fredag', time: '19:00', startdate: '03-07-2019', enddate: '03-08-2019'}
  ];

  ngOnInit() {
  }

  selectRow(row: any) {
    console.log("test", row);
  }



}
