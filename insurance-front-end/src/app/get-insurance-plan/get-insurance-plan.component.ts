import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { Router } from '@angular/router';
import { TemporaryDataService } from '../service/temporary-data.service';

@Component({
  selector: 'app-get-insurance-plan',
  templateUrl: './get-insurance-plan.component.html',
  styleUrls: ['./get-insurance-plan.component.css']
})
export class GetInsurancePlanComponent {

  insuranceSchemeData:any;
  insurancePlanData:any;
  constructor(private insuranceService:InsuranceService,private temporaryData:TemporaryDataService, private router: Router){
    
    insuranceService.getInsurancePlan().subscribe({
      next:(data)=>{
      this.insurancePlanData=data
      console.log(this.insurancePlanData)
      // this.findInsuranceTypeName(this.insuranceSchemeData.insuranceTypeId);
    },
    error:(errorResponse:HttpErrorResponse)=>{
      console.log(errorResponse)
    }
    })
  }
  setId(id:number){
    console.log(id)
    this.temporaryData.setId(id)
    this.router.navigateByUrl("/updateInsurancePlan")
  }
  deleteData(id:number){
    console.log(id)
    this.insuranceService.deleteInsurancePlan(id).subscribe({
      next:(response)=>{
        alert('data deleted')
      }
    })
  }

// findInsuranceTypeName(id:number){
//   // debugger
//   this.insuranceService.getInsuranceTypeById(id).subscribe({
//     next:(data)=>{
//       this.insuranceTypeData=data
//       console.log(this.insuranceTypeData)
//     },
//     error:(errorResponse:HttpErrorResponse)=>{
//       console.log(errorResponse)
//     }
//   })
//}
}
