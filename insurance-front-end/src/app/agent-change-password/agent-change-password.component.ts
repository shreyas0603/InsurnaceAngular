import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { TemporaryDataService } from '../service/temporary-data.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-agent-change-password',
  templateUrl: './agent-change-password.component.html',
  styleUrls: ['./agent-change-password.component.css']
})
export class AgentChangePasswordComponent {

  agentData:any
  changePasswordAgent = new FormGroup({
    id:new FormControl(''),
    oldPassword: new FormControl(''),
    newPassword:new FormControl('')
  })
  
  student: any=[{}]

  agentId:number=0;

  constructor(private studentinfo:InsuranceService,private temporarydata: TemporaryDataService,private router:Router){

    // studentinfo.getAgent().subscribe((data)=>{
    //   this.agentData=data
    // })
    // temporarydata.getAgentInfo(this.agentData).subscribe(data=>this.student=data)
    this.agentId=temporarydata.getLoginId()
    console.log(this.agentId)
    // studentinfo.getAdminById(this.adminId).subscribe({
    //   next:(result)=>{
    //       this.adminData=result
    //   },
    //   error:(errorResponse:HttpErrorResponse)=>{
    //     console.log(errorResponse)
    //   }
    // })

  
  }
  changeAgentPassword(data:any){

    this.studentinfo.changePasswordAgent(data).subscribe({
      next:(result)=>{
        alert('Password Changed SuccessFully')
        console.log(result)
        this.router.navigateByUrl('/agent')
      },
      error:(errorResponse:HttpErrorResponse)=>{

        console.log(errorResponse);
        
      }
    })
  }
}
