import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InsuranceService } from '../service/insurance.service';
import { TemporaryDataService } from '../service/temporary-data.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-update-insurance-plan',
  templateUrl: './update-insurance-plan.component.html',
  styleUrls: ['./update-insurance-plan.component.css']
})
export class UpdateInsurancePlanComponent {

  insurancePlan:any=[{}]
  insuranceSchemeData:any
  insurancePlanData:any
  insurancePlanForm=new FormGroup({
    minPolicyTerm:new FormControl(''),
    maxPolicyTerm:new FormControl(''),
    minAge:new FormControl(''),
    maxAge:new FormControl(''),
    minInvestmentAmount:new FormControl(''),
    maxInvestmentAmount:new FormControl(''),
    profitRatioPercentage:new FormControl(''),
    insuranceSchemeId:new FormControl('')
  })
  insurancePlanId:number=0
  constructor(private insuranceService:InsuranceService,private temporaryData:TemporaryDataService,private router:Router){
    temporaryData.getId.subscribe(id=>this.insurancePlanId=id)
    insuranceService.getInsuranceScheme().subscribe({
      next:(result)=>{
        this.insuranceSchemeData=result
        console.log(this.insuranceSchemeData)
      },
      error(errorResponse:HttpErrorResponse){
        console.log(errorResponse)
      }
    })
  }
  addInsuranceScheme(data:any){
    console.log(this.insurancePlanForm)
    this.insuranceService.addInsurancePlan(data).subscribe({
      next:(resopnse)=>{
        alert("Insurance type Added");
        this.router.navigateByUrl("/admin")
      },error(errorResponse:HttpErrorResponse){
        console.log(errorResponse)
      }
    })
  }
}
