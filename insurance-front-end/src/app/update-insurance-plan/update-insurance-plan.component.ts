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

  insurnacePlanForm=new FormGroup({
    id:new FormControl(''),
    minPolicyTerm:new FormControl(''),
    maxPolicyTerm:new FormControl(''),
    minAge:new FormControl(''),
    maxAge:new FormControl(''),
    minInvestmentAmount:new FormControl(''),
    maxInvestmentAmount:new FormControl(''),
    profitRatioPercentage:new FormControl(''),
    insuranceSchemeId:new FormControl('')
  })

  planData:any
  planId:number=0

  constructor(private planinfo:InsuranceService,private temporaryData: TemporaryDataService,private router:Router){
    temporaryData.getId.subscribe(id=>this.planId=id)
    //thi.id=temporaryData.getId()
    planinfo.getInsurancePlanById(this.planId).subscribe({
      next:(result)=>{
        this.planData=result
      },
      error(errorResponse:HttpErrorResponse){
        console.log(errorResponse)
      }
    })
    console.log(this.planId)
    
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
  updateinsurnacePlan(data:any){
    // this.insuranceTypeForm.id=this.insuranceTypeId
    console.log(data)
    this.planinfo.updateInsurancePlan(data).subscribe({
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
