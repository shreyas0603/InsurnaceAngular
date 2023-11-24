import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InsuranceService } from '../service/insurance.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-insurance-scheme',
  templateUrl: './add-insurance-scheme.component.html',
  styleUrls: ['./add-insurance-scheme.component.css']
})
export class AddInsuranceSchemeComponent {

  insuranceSchemeData:any
  insuranceTypeData:any
  insuranceSchemeForm=new FormGroup({
    insuranceTypeId:new FormControl('',[Validators.required]),
    insuranceSchemeName:new FormControl('', [Validators.required, Validators.maxLength(50)]),
    newRegistrationCommision:new FormControl('', [Validators.required, Validators.min(1)]),
    installmentPaymentCommision:new FormControl('', [Validators.required, Validators.min(1)]),
    details:new FormControl('', [Validators.required])
  })
  constructor(private insuranceService:InsuranceService,private router:Router){
    insuranceService.getInsuranceType().subscribe({
      next:(result)=>{
        this.insuranceTypeData=result
      },
      error(errorResponse:HttpErrorResponse){
        console.log(errorResponse)
      }
    })
  }
  ngOnInit():void{
    // debugger
    var token=localStorage.getItem('token')
    
    var role = localStorage.getItem('role')
    if(token==null){
      alert('Please login')
      this.router.navigateByUrl('/login')
    }
    else if(role!='Admin'){
      alert('Please Login As Admin')
      this.router.navigateByUrl('/login')
    }
  }
  addInsuranceScheme(data:any){
    console.log(this.insuranceSchemeForm)
    this.insuranceService.addInsuranceScheme(data).subscribe({
      next:(resopnse)=>{
        alert("Insurance type Added");
        this.router.navigateByUrl("/admin")
      },error(errorResponse:HttpErrorResponse){
        console.log(errorResponse)
      }
    })
  }
}
