import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-get-insurance-scheme',
  templateUrl: './get-insurance-scheme.component.html',
  styleUrls: ['./get-insurance-scheme.component.css']
})
export class GetInsuranceSchemeComponent {

  insuranceSchemeData:any;
  insuranceTypeData:any;
  constructor(private insuranceService:InsuranceService, private router: Router){
    
    insuranceService.getInsuranceScheme().subscribe({
      next:(data)=>{
      this.insuranceSchemeData=data
      console.log(this.insuranceSchemeData)
      this.findInsuranceTypeName(this.insuranceSchemeData.insuranceTypeId);
    },
    error:(errorResponse:HttpErrorResponse)=>{
      console.log(errorResponse)
    }
  })
}
findInsuranceTypeName(id:number){
  // debugger
  this.insuranceService.getInsuranceTypeById(id).subscribe({
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
