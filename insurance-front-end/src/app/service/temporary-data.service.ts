import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemporaryDataService {

  private id= new BehaviorSubject(0);
  private role:string='some';
  private loginId:number=0;
  private tableInfoId:number=0
  getId= this.id.asObservable();
  // getRole= this.role.asObservable();

  //Admin Counts
  private agentCount:number=0
  private employeeCount:number=0
  private customerCount:number=0
  private insuranceTypeCount:number=0
  private insuranceSchemeCount:number=0
  private locationCount:number=0

  getAgentCount(){
    return this.agentCount
  }
  getEmployeeCount(){
    return this.employeeCount
  }
  getCustomerCount(){
    return this.customerCount
  }
  getInsuranceTypeCount(){
    // var insuranceTypeCount=localStorage.getItem('insuranceTypeCount')
    // return (JSON.parse(insuranceTypeCount))
    // return parseInt(localStorage.getItem('agentCount'))
    return this.insuranceTypeCount
  }
  getInsuranceSchemeCount(){
    return this.insuranceSchemeCount
  }
  getLocationCount(){
    return this.locationCount
  }
  getRole():string{
    return this.role
  }
  getLoginId():number{
    return this.loginId
  }
  getTableInfoId():number{
    return this.tableInfoId
  }

  constructor() { }

  //Admin Count
  setAgentCount(count:number){
    // localStorage.setItem('agentCount',JSON.stringify({count}))
    // localStorage.setItem('agentCount',count.toString())
    this.agentCount=count
  }
  setEmployeeCount(count:number){
    this.employeeCount=count
  }setCustomerCount(count:number){
    this.customerCount=count
  }setInsuranceSchemeCount(count:number){
    this.insuranceSchemeCount=count
  }setInsuranceTypeCount(count:number){
    // localStorage.setItem('insuranceTypeCount',JSON.stringify({count}))
    this.insuranceTypeCount=count
  }
  setLocationCount(count:number){
    this.locationCount=count
  }
  setTableInfoId(id:number){
    this.tableInfoId=id
  }
  setLoginId(loginIdNumber:number){
    this.loginId=loginIdNumber
    console.log(this.loginId)
  }
  setId(idNumber:number){
    this.id.next(idNumber)
    //this.id=idNumber
    console.log(this.id)
  }
  setRole(userRole:string){
    // debugger
    this.role=userRole
    console.log(this.role)
    
  }
}
