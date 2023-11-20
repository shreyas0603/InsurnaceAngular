import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InsuranceService } from '../service/insurance.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.css']
})
export class DefaultPageComponent {
 insuranceSchemeData:any
  constructor(private insuranceService:InsuranceService, private router:Router){
    insuranceService.getInsuranceScheme().subscribe({
      next:(result)=>{
        this.insuranceSchemeData=result
        console.log(this.insuranceSchemeData)
      },
      error(errorResponse:HttpErrorResponse){
        console.log(errorResponse)
      }
    })
  }
  loginPage(){
    this.router.navigateByUrl('/login')
  }
}
