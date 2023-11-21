import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { TemporaryDataService } from '../service/temporary-data.service';

@Component({
  selector: 'app-get-insurance-type',
  templateUrl: './get-insurance-type.component.html',
  styleUrls: ['./get-insurance-type.component.css']
})
export class GetInsuranceTypeComponent {

  insuranceTypeData:any;
  constructor(private insuranceService:InsuranceService, private router: Router,private temporaryData:TemporaryDataService){
    insuranceService.getInsuranceType().subscribe({
      next:(data)=>{
      this.insuranceTypeData=data
      console.log(this.insuranceTypeData)
      // debugger
    },
    error:(errorResponse:HttpErrorResponse)=>{
      console.log(errorResponse)
    }
  })
  }
  setInsurancePlanId(id:number){
    console.log(id)
    this.temporaryData.setId(id)
    this.router.navigateByUrl("/updateInsuranceType")
  }
  deleteInsuranceType(id:number){
    console.log(id)
    this.insuranceService.deleteInsuranceType(id).subscribe({
      next:(response)=>{
        alert('data deleted')
      }
    })
  }
}
