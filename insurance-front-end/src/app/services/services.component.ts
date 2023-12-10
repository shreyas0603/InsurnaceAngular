import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { TemporaryDataService } from '../service/temporary-data.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

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
