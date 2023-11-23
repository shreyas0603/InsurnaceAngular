import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { TemporaryDataService } from '../service/temporary-data.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-insurance-scheme',
  templateUrl: './update-insurance-scheme.component.html',
  styleUrls: ['./update-insurance-scheme.component.css']
})
export class UpdateInsuranceSchemeComponent {

  insurnaceSchemeForm=new FormGroup({
    id:new FormControl(''),
    insuranceSchemeName:new FormControl(''),
    newRegistrastionCommision:new FormControl(''),
    installmentPaymentCommision:new FormControl(''),
    details:new FormControl(''),
    insuranceTypeId:new FormControl('')
  })

  schemeData:any
  schemeId:number=0

  constructor(private schemeinfo:InsuranceService,private temporaryData: TemporaryDataService,private router:Router){
    temporaryData.getId.subscribe(id=>this.schemeId=id)
    //thi.id=temporaryData.getId()
    schemeinfo.getInsuranceSchemeById(this.schemeId).subscribe({
      next:(result)=>{
        this.schemeData=result
      },
      error(errorResponse:HttpErrorResponse){
        console.log(errorResponse)
      }
    })
    console.log(this.schemeId)
    
  }
  updateinsurnaceScheme(data:any){
    // this.insuranceTypeForm.id=this.insuranceTypeId
    console.log(data)
    this.schemeinfo.updateInsuranceScheme(data).subscribe({
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
