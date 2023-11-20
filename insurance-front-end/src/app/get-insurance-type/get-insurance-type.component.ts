import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-get-insurance-type',
  templateUrl: './get-insurance-type.component.html',
  styleUrls: ['./get-insurance-type.component.css']
})
export class GetInsuranceTypeComponent {

  insuranceTypeData:any;
  constructor(private insuranceService:InsuranceService, private router: Router){
    insuranceService.getInsuranceType().subscribe({
      next:(data)=>{
      this.insuranceTypeData=data
      console.log(this.insuranceTypeData)
    },
    error:(errorResponse:HttpErrorResponse)=>{
      console.log(errorResponse)
    }
  })
  }
}
