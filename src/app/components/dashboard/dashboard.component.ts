import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/services/data/data.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';


export interface MyList {
  Id: number;
  Name: string;
  Email: string;
  Password: string;
  CourseName: string;
  Duration: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {Name: 'Reshma', Email: 'reshma@gmail.com', Password: 'Reshma*123', CourseName: 'Angular', Duration: '3months'},
//   {Name: 'Vahidha', Email: 'vahidha@gmail.com', Password: 'Vahidha*123', CourseName: 'React', Duration: '3months'},
//   {Name: 'Chinna', Email: 'chinna@gmail.com', Password: 'Chinna*123', CourseName: 'DotNet', Duration: '6months'},
//   {Name: 'Basith', Email: 'basith@gmail.com', Password: 'Basith*123', CourseName: 'DotNet', Duration: '4months'},
// ];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  
  arrayList: any;

  constructor(private dataService: DataService, public dialog: MatDialog) {}

  ngOnInit() {
    this.getStudentList()
    const data : MyList[] = this.arrayList;
    this.dataSource = new MatTableDataSource(data);
  }

  getStudentList() {
    this.dataService.getList().subscribe((res: any) => {
      console.log(res);
      this.arrayList = res;
      console.log(this.arrayList);
    })
  }

  onEdit(value: any) {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '30vw',
      height: '65vh',
      data: value
    });
    console.log(value, "student details")
  }

  onDelete(Id: any){
    console.log(Id)
    this.dataService.deleteData(Id).subscribe((res:any) => {
      console.log(res);
    })
  }
  
  displayedColumns: string[] = ['ID','Name', 'Email', 'Password', 'CourseName', 'Duration'];
  dataSource !: MatTableDataSource<MyList>;

  }
