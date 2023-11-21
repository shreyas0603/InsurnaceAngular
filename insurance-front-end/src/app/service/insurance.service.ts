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
    return this.http.get(this.url + "/Admin/" + id)
  }

  updateAmin(data:any){
    return this.http.put(this.url+ "/" + data.id, data)
  }

  addAdmin(data:any){
    return this.http.post(this.url,data)
  }

  deleteAdmin(id:any){
    return this.http.delete(this.url+'/'+id)
  }
  getAgent (){
    return this.http.get(this.url+"/Agent")
  }
  addAgent(data:any){
    return this.http.post(this.url+"/Agent",data)
  }
  getCustomer(){
    return this.http.get(this.url+"/Customer")
  }
  getEmployee (){
    return this.http.get(this.url+"/Employee")
  }
  addEmployee(data:any){
    return this.http.post(this.url+"/Employee",data)
  }
  getLocation (){
    return this.http.get(this.url+"/Location")
  }
  addLocation(data:any){
    return this.http.post(this.url+"/Location",data)
  }
  //customer-insurance-account
  getCustomerInsuranceAccount(){
    return this.http.get(this.url+"/CustomerInsuranceAccount")
  }
  addInsuranceType(data:any){
    return this.http.post(this.url+"/InsuranceType",data)
  }
  getInsuranceType(){
    return this.http.get(this.url+"/InsuranceType")
  }
  getInsuranceTypeById(id:any){
    return this.http.get(this.url + "/InsuranceType/" + id)
  }
  updateInsuranceType(data:any){
    return this.http.put(this.url+"/InsuranceType",data)
  }
  deleteInsuranceType(id:number){
    console.log(id)
    // debugger
    return this.http.delete(this.url+"/InsuranceType/"+id)
  }
  addInsuranceScheme(data:any){
    return this.http.post(this.url+"/InsuranceScheme",data)
  }
  getInsuranceScheme(){
    return this.http.get(this.url+"/InsuranceScheme")
  }
  addInsurancePlan(data:any){
    return this.http.post(this.url+"/InsurancePlan",data)
  }
  getInsurancePlan(){
    return this.http.get(this.url+"/InsurancePlan")
  }
  updateInsurancePlan(data:any){
    return this.http.put(this.url+"/InsurancePlan/"+data.id,data)
  }
  //policy payments
  getPolicyPayements(){
    return this.http.get(this.url+"/PolicyPayment")
  }
  //policy claim
  getPolicyClaim(){
    return this.http.get(this.url+"/PolicyClaim")
  }
  customers(pgNo?: number, pgSize?: number) {
    console.log("Hello");
    return this.http.get(this.url + "?PageNumber=" + pgNo + "&PageSize="+ pgSize,
    { observe: 'response' });
  }
  // commsion
  getCommision(){
    return this.http.get(this.url+"/Commision")
  }
  //getquery
  getQuery(){
    return this.http.get(this.url+"/Query")
  }

  
}
