import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
function _window() : any {
  // return the global native browser window object
  
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {
  
  get nativeWindow() : any {
    
    return _window();
 }
  url="https://localhost:7114/api"
  constructor( private http:HttpClient) { }
  //Admin
  getAdmins(){
    return this.http.get(this.url+"/Admin")
  }
  isAdminUsernameUnique(username: string){
    return this.http.get(this.url+"/Admin/UsernameUnique"+"?username="+username)
  }
  getAdminById(id:any):Observable<any>{
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
  getAgent ():Observable<any>{
    return this.http.get(this.url+"/Agent")
  }
  isAgentUsernameUnique(username: string){
    return this.http.get(this.url+"/Agent/UsernameUnique"+"?username="+username)
  }
  getAgentById(id:Number):Observable<any>{
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
  addCustomer(data:any){
    return this.http.post(this.url+"/Customer",data)
  }
  getCustomer():Observable<any>{
    return this.http.get(this.url+"/Customer")
  }
  changePasswordCustomer(data:any){
    return this.http.post(this.url+"/Customer/ChangePassword",data)
  }
  isCustomerUsernameUnique(username: string){
    return this.http.get(this.url+"/Customer/UsernameUnique"+"?username="+username)
  }
  getCustomerById(id:number):Observable<any>{
    return this.http.get(this.url+"/Customer/"+id)
  }
  updateCustomer(data:any){
    return this.http.put(this.url+"/Customer",data)
  }
  deleteCustomer(id:number){
    return this.http.delete(this.url+"/Customer/"+id)
  }
  //Employee
  getEmployee ():Observable<any>{
    return this.http.get(this.url+"/Employee")
  }
  isEmployeeUsernameUnique(username: string){
    return this.http.get(this.url+"/Employee/UsernameUnique"+"?username="+username)
  }
  getEmployeeById (id:number):Observable<any>{
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
  getLocation ():Observable<any>{
    return this.http.get(this.url+"/Location")
  }
  getLocationById (id:number):Observable<any>{
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
  addCustomerInsuranceAccount(data:any){
    return this.http.post(this.url+"/CustomerInsuranceAccount",data)
  }
  getCustomerInsuranceAccount():Observable<any>{
    return this.http.get(this.url+"/CustomerInsuranceAccount")
  }
  getCustomerInsuranceAccountById(id:number):Observable<any>{
    return this.http.get(this.url+"/CustomerInsuranceAccount/"+id)
  }
  getCustomerInsuranceAccountByCustomerId(id:number):Observable<any>{
    return this.http.get(this.url+"/CustomerInsuranceAccount/ByCustomerId/"+id)
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
  getInsuranceType():Observable<any>{
    return this.http.get(this.url+"/InsuranceType")
  }
  getInsuranceTypeById(id:any):Observable<any>{
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
  getInsuranceScheme():Observable<any>{
    return this.http.get(this.url+"/InsuranceScheme")
  }
  getInsuranceSchemeById(id:number):Observable<any>{
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
  getInsurancePlan():Observable<any>{
    return this.http.get(this.url+"/InsurancePlan")
  }
  getInsurancePlanById(id:number):Observable<any>{
    return this.http.get(this.url+"/InsurancePlan/"+id)
  }
  updateInsurancePlan(data:any){
    return this.http.put(this.url+"/InsurancePlan",data)
  }
  deleteInsurancePlan(id:number){
    return this.http.delete(this.url+"/InsurancePlan/"+id)
  }
  //policy payments
  getPolicyPayements():Observable<any>{
    return this.http.get(this.url+"/PolicyPayment")
  }
  addPolicyPayments(data:any){
    return this.http.post(this.url+"/PolicyPayment",data)
  }
  updatePolicyPayments(data:any){
    return this.http.put(this.url+"/PolicyPayment",data)
  }
  deletePolicyPayments(id:number){
    return this.http.delete(this.url+"/PolicyPayment/"+id)
  }
  //policy claim
  getPolicyClaim():Observable<any>{
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
  getCommision():Observable<any>{
    return this.http.get(this.url+"/Commision")
  }
  updateCommision(data:any){
    return this.http.put(this.url+"/Commision",data)
  }
  deleteCommision(id:number){
    return this.http.delete(this.url+"/Commision/"+id)
  }
  //getquery
  addQuery(data:any){
    return this.http.post(this.url+"/Query",data)
  }
  getQuery():Observable<any>{
    return this.http.get(this.url+"/Query")
  }
  getQueryById(id:number):Observable<any>{
    return this.http.get(this.url+"/Query/"+id)
  }
  updateQuery(data:any){
    return this.http.put(this.url+"/Query",data)
  }
  //CommisionWithdrawal
  getCommisonWithdrawal():Observable<any>{
    return this.http.get(this.url+"/CommisionWithdrawal")
  }
  getCommisonWithdrawalById(id:number):Observable<any>{
    return this.http.get(this.url+"/CommisionWithdrawal/"+id)
  }
  updateCommisionWithdrawal(data:any){
    return this.http.put(this.url+"/CommisionWithdrawal",data)
  }
  addCommisionWithdrawal(data:any){
    return this.http.post(this.url+"/CommisionWithdrawal",data)
  }
  //Document
  addFiles(data:FormData){
    return this.http.post<any>(this.url+"/Documents/Upload",data)
  }
  getDocumentById(id: number): Observable<any> {
    return this.http.get(this.url+"/Documents/"+id);
  }

  getAllDocuments(): Observable<any> {
    // const url = ${this.apiUrl}/document;
    return this.http.get(this.url+"/Documents/getAll");
  }
}
