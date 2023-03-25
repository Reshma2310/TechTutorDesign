import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpService) { }

  getList() {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        
      })
    }
    return this.http.getservice('http://localhost:49900/ServiceTutor.svc/getList/', false, header)
  }
  addStudent(data: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.postservice('http://localhost:49900/ServiceTutor.svc/add/', data, false, header)
  }
  updateData(data: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.putservice(`http://localhost:49900/ServiceTutor.svc/update/${data.Id}`,data, false, header)
  }
  deleteData(Id: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.deleteservice(`http://localhost:49900/ServiceTutor.svc/delete/${Id}`, false, header) 
  }
}
