import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  url="https://localhost:7114/api"
  constructor( private http:HttpClient) { }

  getAdmins(){
    return this.http.get(this.url+"/Admin")
  }

  getAdminById(id:any){
    return this.http.get(this.url + "/" + id)
  }

  updateStudent(data:any){
    return this.http.put(this.url+ "/" + data.id, data)
  }

  addStudent(data:any){
    return this.http.post(this.url,data)
  }

  deleteStudent(id:any){
    return this.http.delete(this.url+'/'+id)
  }
}
