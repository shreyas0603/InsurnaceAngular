import { Component } from '@angular/core';
import { TemporaryDataService } from '../service/temporary-data.service';
import { InsuranceService } from '../service/insurance.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-navbar',
  templateUrl: './customer-navbar.component.html',
  styleUrls: ['./customer-navbar.component.css']
})
export class CustomerNavbarComponent {

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
  deleteToken(){
    // localStorage.removeItem('token')
    localStorage.clear()
  }

  setRole(){
    console.log("hih")
    this.temporarydata.setRole('Customer')  
    // console.log(this.temporarydata.getRole)
    
  }
}
