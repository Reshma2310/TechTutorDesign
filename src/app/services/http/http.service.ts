import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpclient: HttpClient) { }

  postservice(url:any, data:any, token:boolean=false, options: any){
    return this.httpclient.post(url, data, token && options)
  }

  getservice(url:any, token:boolean=false, options:any){
    return this.httpclient.get(url, token && options)
  }

  putservice(url:any, data:any, token:boolean=false, options: any){
    return this.httpclient.put(url, data, token && options)
  }

  // deleteservice(url:any, data:any, token:boolean=false, options: any){
  //   return this.httpclient.post(url, data, token && options)
  // }

  deleteservice(url: string, token: boolean = false, options: any) {
    return this.httpclient.delete(url, token && options)}
  
}
