import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { TemporaryDataService } from '../service/temporary-data.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-get-customer-insurance-account',
  templateUrl: './get-customer-insurance-account.component.html',
  styleUrls: ['./get-customer-insurance-account.component.css']
})
export class GetCustomerInsuranceAccountComponent {

  accountData:any;
  page = 1;
	pageSize = 4;
  customers:any;
  collectionSize=0;
  userRole:string=''
  customerData:any
  customerloginId:number=0
  constructor(private accountinfo:InsuranceService,protected temporaryData:TemporaryDataService, private router: Router){
    this.userRole=temporaryData.getRole()
    this.customerloginId=temporaryData.getLoginId()
    if(this.userRole=='Admin' || this.userRole=='Agent'){

      accountinfo.getCustomerInsuranceAccount().subscribe((data)=>{
        this. accountData=data
        console.log(this. accountData);
        // this.collectionSize=this.customerData.length;
        accountinfo.getCustomer().subscribe({
          next:(response)=>{
            this.customerData=response
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
