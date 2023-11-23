import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  url="https://localhost:7114/api"
  constructor( private http:HttpClient) { }
  //Admin
  getAdmins(){
    return this.http.get(this.url+"/Admin")
  }

  getAdminById(id:any){
    return this.http.get(this.url + "/Admin/" + id)
  }

  updateAdmin(data:any){
    return this.http.put(this.url+ "/Admin" , data)
  }

  addAdmin(data:any){
    return this.http.post(this.url,data)
  }

  deleteAdmin(id:any){
    return this.http.delete(this.url+'/Admin/'+id)
  }
  changePasswordAdmin(data:any){
    return this.http.post(this.url+"/Admin/ChangePassword",data)
  }
  //Agent
  getAgent (){
    return this.http.get(this.url+"/Agent")
  }
  getAgentById(id:Number){
    return this.http.get(this.url+"/Agent/"+id)
  }
  addAgent(data:any){
    return this.http.post(this.url+"/Agent",data)
  }
  updateAgent(data:any){
    return this.http.put(this.url+"/Agent",data)
  }
  deleteAgent(id:number){
    return this.http.delete(this.url+"/Agent/"+id)
  }
  changePasswordAgent(data:any){
    return this.http.post(this.url+"/Agent/ChangePassword",data)
  }
  //Customer
  getCustomer(){
    return this.http.get(this.url+"/Customer")
  }
  getCustomerById(id:number){
    return this.http.get(this.url+"/Customer/"+id)
  }
  updateCustomer(data:any){
    return this.http.put(this.url+"/Customer",data)
  }
  deleteCustomer(id:number){
    return this.http.delete(this.url+"/Customer/"+id)
  }
  //Employee
  getEmployee (){
    return this.http.get(this.url+"/Employee")
  }
  getEmployeeById (id:number){
    return this.http.get(this.url+"/Employee/"+id)
  }
  addEmployee(data:any){
    return this.http.post(this.url+"/Employee",data)
  }
  updateEmployee(data:any){
    return this.http.put(this.url+"/Employee",data)
  }
  deleteEmployee(id:number){
    return this.http.delete(this.url+"/Employee/"+id)
  }
  //Location
  getLocation (){
    return this.http.get(this.url+"/Location")
  }
  getLocationById (id:number){
    return this.http.get(this.url+"/Location/"+id)
  }
  addLocation(data:any){
    return this.http.post(this.url+"/Location",data)
  }
  updateLocation(data:any){
    return this.http.put(this.url+"/Location",data)
  }
  deleteLocation(id:number){
    return this.http.delete(this.url+"/Location/"+id)
  }
  //customer-insurance-account
  getCustomerInsuranceAccount(){
    return this.http.get(this.url+"/CustomerInsuranceAccount")
  }
  getCustomerInsuranceAccountById(id:number){
    return this.http.get(this.url+"/CustomerInsuranceAccount/"+id)
  }
  updateCustomerInsuranceAccount(data:any){
    return this.http.put(this.url+"/CustomerInsuranceAccount",data)
  }
  deleteCustomerInsuranceAccount(id:number){
    return this.http.delete(this.url+"/CustomerInsuranceAccount/"+id)
  }
  //InsuranceType
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
    return this.http.delete(this.url+"/InsuranceType/"+id)
  }
  //InsuranceScheme
  addInsuranceScheme(data:any){
    return this.http.post(this.url+"/InsuranceScheme",data)
  }
  getInsuranceScheme(){
    return this.http.get(this.url+"/InsuranceScheme")
  }
  getInsuranceSchemeById(id:number){
    return this.http.get(this.url+"/InsuranceScheme/"+id)
  }
  updateInsuranceScheme(data:any){
    return this.http.put(this.url+"/InsuranceScheme",data)
  }
  deleteInsuranceScheme(id:number){
    return this.http.delete(this.url+"/InsuranceScheme/"+id)
  }
  //InsurancePlan
  addInsurancePlan(data:any){
    return this.http.post(this.url+"/InsurancePlan",data)
  }
  getInsurancePlan(){
    return this.http.get(this.url+"/InsurancePlan")
  }
  getInsurancePlanById(id:number){
    return this.http.get(this.url+"/InsurancePlan/"+id)
  }
  updateInsurancePlan(data:any){
    return this.http.put(this.url+"/InsurancePlan",data)
  }
  deleteInsurancePlan(id:number){
    return this.http.delete(this.url+"/InsurancePlan/"+id)
  }
  //policy payments
  getPolicyPayements(){
    return this.http.get(this.url+"/PolicyPayment")
  }
  updatePolicyPayments(data:any){
    return this.http.put(this.url+"/PolicyPayment",data)
  }
  deletePolicyPayments(id:number){
    return this.http.delete(this.url+"/PolicyPayment/"+id)
  }
  //policy claim
  getPolicyClaim(){
    return this.http.get(this.url+"/PolicyClaim")
  }
  updatePolicyClaim(data:any){
    return this.http.put(this.url+"/PolicyClaim",data)
  }
  deletePolicyClaim(id:number){
    return this.http.delete(this.url+"/PolicyClaim/"+id)
  }
  //Pagination
  customers(pgNo?: number, pgSize?: number) {
    console.log("Hello");
    return this.http.get(this.url +"/Customer"+ "?PageNumber=" + pgNo + "&PageSize="+ pgSize,
    { observe: 'response' });
  }
  // commsion
  getCommision(){
    return this.http.get(this.url+"/Commision")
  }
  updateCommision(data:any){
    return this.http.put(this.url+"/Commision",data)
  }
  deleteCommision(id:number){
    return this.http.delete(this.url+"/Commision/"+id)
  }
  //getquery
  getQuery(){
    return this.http.get(this.url+"/Query")
  }
  getQueryById(id:number){
    return this.http.get(this.url+"/Query/"+id)
  }
  updateQuery(data:any){
    return this.http.put(this.url+"/Query",data)
  }
  
  
}
