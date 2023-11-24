import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InsuranceService } from '../service/insurance.service';
import { Router } from '@angular/router';
import { TemporaryDataService } from '../service/temporary-data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-update-insurance-type',
  templateUrl: './update-insurance-type.component.html',
  styleUrls: ['./update-insurance-type.component.css']
})
export class UpdateInsuranceTypeComponent {

  
  insuranceTypeData:any
  insuranceTypeForm=new FormGroup({
    id:new FormControl(''),
    insuranceTypeName:new FormControl('')
  })
  insuranceTypeId:number=0

  //id:number=0
  constructor(private insuranceTypeInfo:InsuranceService,private router:Router,private temporaryData:TemporaryDataService){
    
    temporaryData.getId.subscribe(id=>this.insuranceTypeId=id)
    //thi.id=temporaryData.getId()
    insuranceTypeInfo.getInsuranceTypeById(this.insuranceTypeId).subscribe({
      next:(result)=>{
        this.insuranceTypeData=result
      },
      error(errorResponse:HttpErrorResponse){
        console.log(errorResponse)
      }
    })
    console.log(this.insuranceTypeId)
    
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
  updateInsuranceType(data:any){
    // this.insuranceTypeForm.id=this.insuranceTypeId
    console.log(data)
    this.insuranceTypeInfo.updateInsuranceType(data).subscribe({
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
