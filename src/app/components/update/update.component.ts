import { Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  Id: any;
  Name: any;
  Email: any;
  Password: any;
  CourseName: any;
  Duration: any;

  constructor(
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dataService: DataService,
  ) {
    this.Id = this.data.Id;
    this.Name = this.data.Name;
    this.Email = this.data.Email;
    this.Password = this.data.Password;
    this.CourseName = this.data.CourseName;
    this.Duration = this.data.Duration;
  }

  ngOnInit(): void {
    console.log(this.data)    
  }
  onClose() {
    let input = {
      Id: this.Id,
      Name: this.Name,
      Email: this.Email,
      Password: this.Password,
      CourseName: this.CourseName,
      Duration: this.Duration,
    }
    return this.dataService.updateData(input).subscribe((res: any) => {
      console.log(res);
      this.dialogRef.close()
    })
  }
  
}
