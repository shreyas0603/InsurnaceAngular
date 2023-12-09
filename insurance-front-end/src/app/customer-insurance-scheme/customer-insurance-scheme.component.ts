import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { TemporaryDataService } from '../service/temporary-data.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-customer-insurance-scheme',
  templateUrl: './customer-insurance-scheme.component.html',
  styleUrls: ['./customer-insurance-scheme.component.css']
})
export class CustomerInsuranceSchemeComponent {

  scheme = new FormGroup({
    years : new FormControl('', [Validators.required]),
    investmentAmt : new FormControl('', [Validators.required, Validators.maxLength(100)]),
    months : new FormControl('', [Validators.required]),
  })

  insurnaceSchemeId:number=0;
  insuranceSchemeData:any
  insurancePlanData:Array<any>
  insurnaceSchemeName:string='';
  calculateData:any;
  noMonths=["1","3","6","12"];
  divideYears:number=0;
  totalAmt:number=0;
  installmentAmt:number=0;
  interestAmt:number=0;

  constructor(private insuranceService:InsuranceService,protected temporaryData:TemporaryDataService,private router:Router){
    // this.insuranceSchemeData=new Array<any>()
    this.insurancePlanData=new Array<any>()
    // debugger
    this.insurnaceSchemeId=temporaryData.insurnaceSchemeId
    
    insuranceService.getInsuranceSchemeById(this.insurnaceSchemeId).subscribe((data)=>{
      this.insuranceSchemeData=data
      console.log('scheme dta');
      console.log(this.insuranceSchemeData);
      // console.log('details : ' +this.insuranceSchemeData.details);
      this.insurnaceSchemeName=data.insuranceSchemeName
    })
    
  }
  ngOnInit():void{
    this.insuranceService.getInsurancePlan().subscribe({
      next:(data)=>{
      // debugger
      this.insurancePlanData=data
      this.insurancePlanData=this.insurancePlanData.filter(x=>x.insuranceSchemeId===this.insurnaceSchemeId ,)
      console.log(this.insurancePlanData);
      this.temporaryData.planId=this.insurancePlanData[0].id
      console.log('plan: '+ this.temporaryData.planId)
    },
    error(errorResponse:HttpErrorResponse){
      console.log(errorResponse)
    }
  })
  }
  calculateInterest(data:any){

    this.calculateData=data
    if(this.calculateData.months==12){
      this.divideYears=this.calculateData.years
      this.temporaryData.installmentAmt=this.calculateData.investmentAmt/this.divideYears
    }
    else if(this.calculateData.months==6){
      this.divideYears=this.calculateData.years *2
      this.temporaryData.installmentAmt=this.calculateData.investmentAmt/this.divideYears
    }
    else if(this.calculateData.months==3){
      this.divideYears=this.calculateData.years*4
      this.temporaryData.installmentAmt=this.calculateData.investmentAmt/this.divideYears
    }
    else if(this.calculateData.months==1){
      this.divideYears=this.calculateData.years*12
      this.temporaryData.installmentAmt=this.calculateData.investmentAmt/this.divideYears
    }
    this.temporaryData.interestAmt=this.calculateData.investmentAmt * 0.06
    this.temporaryData.totalAmt= Number.parseInt(this.calculateData.investmentAmt) + this.temporaryData.interestAmt
    console.log(typeof this.calculateData.investmentAmt);
    console.log(typeof this.temporaryData.interestAmt);
    
    
    console.log(this.calculateData);
    this.temporaryData.policyTerm=data.years
    console.log(this.temporaryData.policyTerm);
    
    this.temporaryData.totalInvestmentAmt=data.investmentAmt
    this.temporaryData.months=data.months 
    
  }
}
