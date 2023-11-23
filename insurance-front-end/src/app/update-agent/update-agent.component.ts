import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { Router } from '@angular/router';
import { TemporaryDataService } from '../service/temporary-data.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-agent',
  templateUrl: './update-agent.component.html',
  styleUrls: ['./update-agent.component.css']
})
export class UpdateAgentComponent {

  agentData:any
  agentForm=new FormGroup({
    id:new FormControl(''),
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    userName:new FormControl(''),
    password:new FormControl(''),
    mobileNumber:new FormControl(''),
    email:new FormControl(''),
    commision:new FormControl(''),
    totalCommision:new FormControl(''),

  })
  agentId:number=0

  //id:number=0
  constructor(private insuranceTypeInfo:InsuranceService,private router:Router,private temporaryData:TemporaryDataService){
    
    temporaryData.getId.subscribe(id=>this.agentId=id)
    //thi.id=temporaryData.getId()
    insuranceTypeInfo.getAgentById(this.agentId).subscribe({
      next:(result)=>{
        this.agentData=result
      },
      error(errorResponse:HttpErrorResponse){
        console.log(errorResponse)
      }
    })
    console.log(this.agentId)
    
  }
  updateInsuranceType(data:any){
    // this.insuranceTypeForm.id=this.insuranceTypeId
    console.log(data)
    this.insuranceTypeInfo.updateAgent(data).subscribe({
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
