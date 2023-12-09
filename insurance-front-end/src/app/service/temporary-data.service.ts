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
  private customerInsuranceAccount:number=0
  private _insuranceTypeId:number=0
  private _documentId:number=0
  private _insurnaceSchemeId:number=0

  private _totalAmt:number=0;
  private _installmentAmt:number=0;
  private _interestAmt:number=0;
  private _insuraanceAccountData:any;
  private _policyTerm:number=0;
  private _totalInvestmentAmt:number=0;
  private _months:number=0;
  private _planId:number=0;


  set planId(id:number){
    this._planId=id
  }
  get planId():number{
    return this._planId
  }

  set policyTerm(num:number){
    this._policyTerm=num
  }
  get policyTerm():number{
    return this._policyTerm
  }

  set totalInvestmentAmt(amt:number){
    this._totalInvestmentAmt=amt
  }
  get totalInvestmentAmt():number{

    return this._totalInvestmentAmt
  }

  set months(num:number){
    this._months=num
  }
  get months():number{
    return this._months
  }

  
  set totalAmt(amt:number){
    this._totalAmt=amt
  }
  get totalAmt():number{
    return this._totalAmt
  }

  set installmentAmt(amt:number){
    this._installmentAmt=amt
  }
  get installmentAmt():number{
    return this._installmentAmt
 }

 set interestAmt(amt:number){
  this._interestAmt=amt
}
get interestAmt():number{
  return this._interestAmt
}

set insuraanceAccountData(data:any){
  this._insuraanceAccountData=data
}
get insuraanceAccountData():any{
  return this._insuraanceAccountData
}



  set insurnaceSchemeId(id:number){
    this._insurnaceSchemeId=id
  }

  get insurnaceSchemeId():number{
    return this._insurnaceSchemeId
  }
  set insuranceTypeId(id:number){
    this._insuranceTypeId=id
  }
  get insuranceTypeId():number{
    return this._insuranceTypeId
  }
  set documentId(id:number){
    this._documentId=id
  }
  get documentId():number{
    return this._documentId
  }
  getCustomerInsuranceAccount(){
    return this.customerInsuranceAccount
  }
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
  setCustomerInsuranceAccount(count:number){
    this.customerInsuranceAccount=count
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
