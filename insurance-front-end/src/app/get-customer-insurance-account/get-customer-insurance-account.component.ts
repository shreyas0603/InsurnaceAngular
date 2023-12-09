import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { TemporaryDataService } from '../service/temporary-data.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-get-customer-insurance-account',
  templateUrl: './get-customer-insurance-account.component.html',
  styleUrls: ['./get-customer-insurance-account.component.css']
})
export class GetCustomerInsuranceAccountComponent {

  accountData:Array<any>;
  notFilteredAccounts:Array<any>
  page: number = 1;
  totalRecords:number=0 
  customers:any;
  collectionSize=0;
  userRole:string=''
  customerData:Array<any>
  insurancePlanData:Array<any>
  insuranceSchemeData:Array<any>
  customerloginId:number=0
  constructor(private accountinfo:InsuranceService,protected temporaryData:TemporaryDataService, private router: Router, private data:DataService){
    this.accountData=new Array<any>()
    this.notFilteredAccounts=new Array<any>()
    this.customerData=new Array<any>()
    this.insurancePlanData=new Array<any>()
    this.insuranceSchemeData=new Array<any>()
    this.userRole=temporaryData.getRole()
    this.customerloginId=temporaryData.getLoginId()

    accountinfo.getInsurancePlan().subscribe((data)=>{
      this.insurancePlanData=data
    })
    this.accountinfo.getInsuranceScheme().subscribe((data)=>{
      this.insuranceSchemeData=data
    })
    // accountinfo.getInsuranceScheme().subscribe
    if(this.userRole=='Admin' || this.userRole=='Agent'){
      
      accountinfo.getCustomerInsuranceAccount().subscribe((data)=>{
        this. notFilteredAccounts=data
        this.totalRecords=data.length
      console.log(this.totalRecords)
        console.log(this.notFilteredAccounts);
        // this.collectionSize=this.customerData.length;
        accountinfo.getCustomer().subscribe({
          next:(response)=>{
            this.customerData=response
            console.log('customers' )
            console.log(this.customerData)
            this.filterCustomer()
          },
          error(errorResponse:HttpErrorResponse){
            console.log(errorResponse)
          }
        })
      })
    }
    else if(this.userRole=='Customer' ){
      accountinfo.getCustomerInsuranceAccountByCustomerId(this.customerloginId).subscribe({
        next:(response)=>{
          this.accountData=response
          this.totalRecords=response.length
      console.log(this.totalRecords)
          console.log(this.accountData)
          accountinfo.getCustomer().subscribe({
            next:(response)=>{
              this.customerData=response
              
            },
            error(errorResponse:HttpErrorResponse){
              console.log(errorResponse)
            }
          })  
        },
        error(errorResponse:HttpErrorResponse){
          console.log(errorResponse)
        }
      })
    }
  }
  getCustomerName(customerId: number): string {
 
    if (this.customerData) {
      const customer = this.customerData.find((a: any) => a.id === customerId);
      console.log(customer);
      return customer!=null ? `${customer.firstName} ${customer.lastName}` : 'Customer Not Found';
    } else {
      return 'Customer Data Not Loaded';
    }
  }
  getInsuranceSchemeNameFromPlanId(id:number){
    // debugger
    const planData=this.insurancePlanData.find(x=>x.id===id)
    console.log(planData)
    
    const insuranceSchemeName=this.insuranceSchemeData.find(x=>x.id===planData.insuranceSchemeId)
    return insuranceSchemeName ?`${insuranceSchemeName.insuranceSchemeName}`:`insuranceScheme Not Found`;
  

  }
  pageSize:number=5;
  changePageSize(event:any){
    this.pageSize=event.target.value
    console.log(this.pageSize)
  }
  ngOnInit():void{
    // debugger
    var token=localStorage.getItem('token')
    
    var role = localStorage.getItem('role')
    if(token==null){
      alert('Please login')
      this.router.navigateByUrl('/login')
    }
    else if(role!='Admin' && role!='Agent' && role!='Customer'){
      alert('Please Login As Admin Or Agent')
      this.router.navigateByUrl('/login')
    }
  }
  filterCustomer(){
    // var agent=this.agentData.find((a: any) => a.userId === this.dataService.userId)
    if((this.userRole=="Agent")){
      this.customerData=this.customerData.filter(x=>x.agentId === this.data.userId)
      console.log('filtered Customer' )
      console.log(this.customerData)
      
      this.filterInsuranceAccount()
    }
    else{
    this.accountData=this.notFilteredAccounts
    }
  }
  filterInsuranceAccount(){
    debugger
    for(let c of this.customerData){
      var filter = new Array<any>()
      filter= this.notFilteredAccounts.filter(x=>x.customerId === c.id)
      if(filter.length>0){
        for(let f of filter){
          this.accountData.push(f)
        }
      }
      console.log('filtered account' )
      console.log(this.accountData)
    
    }
    this.totalRecords=this.accountData.length
  }
  setId(id:number){
    console.log(id)
    this.temporaryData.setId(id)
    this.router.navigateByUrl("/updateCustomerInsuranceAccount")
  }
  deleteData(id:number){
    console.log(id)
    this.accountinfo.deleteCustomerInsuranceAccount(id).subscribe({
      next:(response)=>{
        alert('data deleted')
        location.reload()
      }
    })
  }
}
