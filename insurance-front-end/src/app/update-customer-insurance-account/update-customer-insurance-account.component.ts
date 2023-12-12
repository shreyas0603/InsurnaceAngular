import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { TemporaryDataService } from '../service/temporary-data.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-customer-insurance-account',
  templateUrl: './update-customer-insurance-account.component.html',
  styleUrls: ['./update-customer-insurance-account.component.css']
})
export class UpdateCustomerInsuranceAccountComponent {

  insurnaceAccountForm=new FormGroup({
    id:new FormControl(''),
    insuranceCreationDate:new FormControl(''),
    maturityDate:new FormControl(''),
    policyTerm:new FormControl(''),
    totalPremium:new FormControl(''),
    profitRatio:new FormControl(''),
    sumAssured:new FormControl(''),
    customerId:new FormControl(''),
    insurancePlanId:new FormControl('')
  })

  accountData:any
  accountId:number=0

  constructor(private accountinfo:InsuranceService,private temporaryData: TemporaryDataService,private router:Router){
    temporaryData.getId.subscribe(id=>this.accountId=id)
    //thi.id=temporaryData.getId()
    console.log(this.accountId)
    accountinfo.getCustomerInsuranceAccountById(this.accountId).subscribe({
      next:(result)=>{
        this.accountData=result
        console.log(this.accountData)
      },
      error(errorResponse:HttpErrorResponse){
        console.log(errorResponse)
      }
    })
    console.log(this.accountId)
    
  }
  ngOnInit():void{
    // debugger
    var token=localStorage.getItem('token')
    
    var role = localStorage.getItem('role')
    if(token==null){
      alert('Please login')
      this.router.navigateByUrl('/login')
    }
    else if(role!='Admin'){
      alert('Please Login As Admin')
      this.router.navigateByUrl('/login')
    }
  }
  updateCustomerAccount(data:any){
    // this.insuranceTypeForm.id=this.insuranceTypeId
    debugger
    console.log(data)
    this.accountinfo.updateCustomerInsuranceAccount(data).subscribe({
      next:(resopnse)=>{
        console.log(resopnse)
        alert("Insurance type Added");
        this.router.navigateByUrl("/admin")
      },
      error(errorResponse:HttpErrorResponse){
        console.log(errorResponse)
      }
      
    })
    console.log(data)
  }
}
