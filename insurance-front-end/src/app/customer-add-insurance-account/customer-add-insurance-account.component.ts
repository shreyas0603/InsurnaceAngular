import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { TemporaryDataService } from '../service/temporary-data.service';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-customer-add-insurance-account',
  templateUrl: './customer-add-insurance-account.component.html',
  styleUrls: ['./customer-add-insurance-account.component.css']
})
export class CustomerAddInsuranceAccountComponent {

  account = new FormGroup({
    insuranceCreationDate: new FormControl('', Validators.required),
    maturityDate: new FormControl('', [Validators.required]),
    policyTerm: new FormControl('', [Validators.required]),
    totalPremium: new FormControl('', [Validators.required]),
    profitRatio: new FormControl('', [Validators.required,]),
    sumAssured: new FormControl('', [Validators.required]),
    customerId: new FormControl('', [Validators.required]),
    insurancePlanId: new FormControl('', [Validators.required]),
  })

  date=new Date().toISOString().split('T')[0];
  // date2=new Date()
  // maturityDate=this.date2.setFullYear(this.date2.getFullYear() + 1)
  policyTerm:number=2
  c=new Date()
  maturityDate:string=''
  d = new Date();
  year = this.d.getFullYear();
  month =this.d.getMonth();
  day = this.d.getDate();
  loginId:number=0
  customerData:Array<any>
  insurancePlanData:Array<any>
  insuranceSchemeData:Array<any>
  constructor(private insuranceService: InsuranceService, protected temporaryData: TemporaryDataService, private router: Router,protected dataS:DataService) {
    this.customerData=new Array<any>()
    this.insurancePlanData=new Array<any>()
    this.insuranceSchemeData=new Array<any>()
    this.loginId=temporaryData.getLoginId()
    console.log('loginId: '+this.loginId)
    this.policyTerm=this.temporaryData.policyTerm
    console.log(this.policyTerm)
    // console.log(typeof this.policyTerm)
    this.c = new Date(this.year + this.policyTerm*1, this.month, this.day)
    this.maturityDate=this.c.toISOString().split('T')[0];
    insuranceService.getCustomer().subscribe({
      next:(response)=>{
        this.customerData=response
      },
      error(errorResponse:HttpErrorResponse){
        console.log(errorResponse)
      }
    })
    insuranceService.getInsurancePlan().subscribe((data)=>{
      this.insurancePlanData=data
    })
    insuranceService.getInsuranceScheme().subscribe((data)=>{
      this.insuranceSchemeData=data
    })
  }

  storeInsurnaceData(data:any){
    this.temporaryData.insuraanceAccountData=data
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
}
