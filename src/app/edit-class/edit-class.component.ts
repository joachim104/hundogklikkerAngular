import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Class } from '../entities/class';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassService } from '../class.service';

@Component({
  selector: 'app-edit-class',
  templateUrl: './edit-class.component.html',
  styleUrls: ['./edit-class.component.scss']
})
export class EditClassComponent implements OnInit {

  editClassForm: FormGroup;
  classes: Class[];
  classToEdit: any;

  constructor(private route: ActivatedRoute, private router: Router, private classService: ClassService) { }

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

  ngOnInit() {

    this.editClassForm = new FormGroup({
      day: new FormControl(),
      time: new FormControl(),
      subject: new FormControl(),
      startDate: new FormControl(),
      endDate: new FormControl()
    });

    console.log("har lavet formgroup");

    let classId: String;
    classId = this.route.snapshot.paramMap.get("id");

    this.classService.getAllClasses().subscribe((responseFromApi: any[]) => {
      const myData = responseFromApi.filter(x => x.classID == classId);
      this.classes = myData;
      var classData = this.classes[0];

      var fields = {
        day: '',
        time: '',
        subject: '',
        startDate: '',
        endDate: ''
      }

      for (let i in classData) {
        if (typeof fields[i] !== 'undefined') {
          fields[i] = classData[i];
        }
      }
      this.editClassForm.setValue(fields)
    })
  }

  onSubmit() {
    let class1 = this.editClassForm.value;
    class1.classID = this.route.snapshot.paramMap.get("id");
    // sitter.customerId = "js";
    console.log(class1);

    this.classService.updateClass(class1).subscribe(res => {
      console.log(res);
    });
    // let sitter = this.editSitterForm.value as Sitter;
    // this.sittersActions.updateSitter(sitter);
    // this.router.navigate(["/home"]);
  }

}
