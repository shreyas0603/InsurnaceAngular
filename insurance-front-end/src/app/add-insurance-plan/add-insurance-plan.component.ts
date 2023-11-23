import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-insurance-plan',
  templateUrl: './add-insurance-plan.component.html',
  styleUrls: ['./add-insurance-plan.component.css']
})
export class AddInsurancePlanComponent {

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
  constructor(private insuranceService:InsuranceService,private router:Router){
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
