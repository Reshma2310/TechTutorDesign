import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.scss']
})
export class AddstudentComponent implements OnInit {
  addForm! : FormGroup
  submitted = false;

  constructor(private formBuilder: FormBuilder, private dataService: DataService, private router: Router){}

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      name: ['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      pwd: ['', [Validators.required, Validators.minLength(6)]],
      course: ['', Validators.required],
      time: ['', Validators.required],
    })
  }

  onSubmit() {
    this.submitted = true;
    if(this.addForm.valid){
      let data = {
        Name: this.addForm.value.name,
        Email: this.addForm.value.email,
        Password: this.addForm.value.pwd,
        CourseName: this.addForm.value.course,
        Duration: this.addForm.value.time,
      }
      console.log(data);
      this.dataService.addStudent(data).subscribe((res: any) => {
        console.log(res);
        this.router.navigateByUrl('/adminpage/dashboard')
      })
    }
  }

  onReset() {

  }
}
