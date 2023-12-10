import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InsuranceService } from '../service/insurance.service';
import { HttpErrorResponse } from '@angular/common/http';
import { TemporaryDataService } from '../service/temporary-data.service';

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.css']
})
export class DefaultPageComponent {
  insuranceTypeData:Array<any>
  constructor(private insuranceService:InsuranceService,private temporarydata:TemporaryDataService,private router:Router){
    this.insuranceTypeData=new Array<any>()
    insuranceService.getInsuranceType().subscribe({
      next:(data)=>{
        this.insuranceTypeData=data
      }
    })

  }
  setInsuranceTypeId(id:number){
    this.temporarydata.insuranceTypeId=id
    this.router.navigateByUrl('/customerInsurancePlan')
  }
  
  loginPage(){
    this.router.navigateByUrl('/login')
  }
}
