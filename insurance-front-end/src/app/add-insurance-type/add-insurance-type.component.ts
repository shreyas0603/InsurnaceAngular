import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { InsuranceService } from '../service/insurance.service';

@Component({
  selector: 'app-add-insurance-type',
  templateUrl: './add-insurance-type.component.html',
  styleUrls: ['./add-insurance-type.component.css']
})
export class AddInsuranceTypeComponent {

  insuranceTypeData:any
  insuranceTypeForm=new FormGroup({
    insuranceTypeName:new FormControl('')
  })
  constructor(private insuranceTypeInfo:InsuranceService,private router:Router){

  }
  addInsuranceType(data:any){
    this.insuranceTypeInfo.addInsuranceType(data).subscribe({
      next:(resopnse)=>{
        alert("Insurance type Added");
        this.router.navigateByUrl("/admin")
      }
    })
  }
}
