import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url="https://localhost:7114/api"

  constructor(private http:HttpClient) { }

  loginAdmin(data: any){
    return this.http.post(this.url+"/Admin/Login",data,{observe:'response'});
  }

  loginAgent(data: any){
    return this.http.post(this.url+"/Agent/Login",data,{observe:'response'});
  }

  loginCustomer(data: any){
    return this.http.post(this.url+"/Customer/Login",data,{observe:'response'});
  }

  loginEmployee(data: any){
    return this.http.post(this.url+"/Employee/Login",data,{observe:'response'});
  }

}
