import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { ClassService } from '../class.service';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.scss']
})
export class CreateClassComponent implements OnInit {

  constructor(private fb: FormBuilder, private classService: ClassService, private router: Router) { }

  registerClassForm: any;

  ngOnInit() {
    this.registerClassForm = this.fb.group({
      subject: [''],
      day: [''],
      time: [''],
      startDate: [''],
      endDate: ['']
    });
  }

  dayControl = new FormControl('', [Validators.required]);
  subjectControl = new FormControl('', [Validators.required]);

  days: any[] = [
    { name: 'Mandag' },
    { name: 'Tirsdag' },
    { name: 'Onsdag' },
    { name: 'Torsdag' },
    { name: 'Fredag' }
  ];


  subjects: any[] = [
    { name: 'Lydighed' },
    { name: 'Hvalpehold' },
    { name: 'Rally' },
    { name: 'Nosework' }
  ];

  onSubmit() {
    this.classService.createClass(this.registerClassForm.value).subscribe(res => {
      console.log(res);
      this.router.navigate(['/class-card']);
    });
  }

}
