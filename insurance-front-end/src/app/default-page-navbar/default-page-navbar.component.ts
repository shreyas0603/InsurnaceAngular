import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { TemporaryDataService } from '../service/temporary-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default-page-navbar',
  templateUrl: './default-page-navbar.component.html',
  styleUrls: ['./default-page-navbar.component.css']
})
export class DefaultPageNavbarComponent {

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
