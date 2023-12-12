import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-insurance-plan',
  templateUrl: './add-insurance-plan.component.html',
  styleUrls: ['./add-insurance-plan.component.css']
})
export class AddInsurancePlanComponent {

  insuranceSchemeData:any
  insurancePlanData:any
  insurancePlanForm=new FormGroup({
    insuranceSchemeId: new FormControl('', [Validators.required]),
    minPolicyTerm: new FormControl('', [Validators.required, Validators.min(1), Validators.max(60)]),
    maxPolicyTerm: new FormControl('', [Validators.required, Validators.min(1), Validators.max(60)]),
    minAge: new FormControl('', [Validators.required, Validators.maxLength(3), Validators.pattern(/^[0-9]+$/)]),
    maxAge: new FormControl('', [Validators.required, Validators.maxLength(3), Validators.pattern(/^[0-9]+$/)]),
    minInvestmentAmount: new FormControl('', [Validators.required, Validators.min(1)]),
    maxInvestmentAmount: new FormControl('', [Validators.required, Validators.min(1)]),
    profitRatioPercentage: new FormControl('', [Validators.required, Validators.min(0)])
  })
  minPolicyTerm:number=0
  maxPolicyTerm:number=0
  minAge:number=0
  maxAge:number=0
  minInvestmentAmount:number=0
  maxInvestmentAmount:number=0
  constructor(private insuranceService:InsuranceService,private router:Router){
    // debugger
  }
  getInsurancePlan(){
    // this.insuranceService.getInsuranceScheme().subscribe({
    //   next:(result)=>{
    //     this.insuranceSchemeData=result
    //     console.log(this.insuranceSchemeData)
    //   },
    //   error(errorResponse:HttpErrorResponse){
    //     console.log(errorResponse)
    //   }
    // })
    this.insuranceService.getInsuranceScheme().subscribe((data)=>{
      this.insuranceSchemeData=data
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
    this.getInsurancePlan()
  }
  addInsuranceScheme(data:any){
    // debugger
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
