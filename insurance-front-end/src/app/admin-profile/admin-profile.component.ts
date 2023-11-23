import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { TemporaryDataService } from '../service/temporary-data.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent {
  adminData:any
  addAdmin = new FormGroup({
    id:new FormControl(''),
    firstName : new FormControl(''),
    lastName : new FormControl(''),
    userName : new FormControl(''),
    password : new FormControl(''),
  })
  
  student: any=[{}]

  adminId:number=0;

  constructor(private studentinfo:InsuranceService,private temporarydata: TemporaryDataService,private router:Router){

    // studentinfo.getAgent().subscribe((data)=>{
    //   this.agentData=data
    // })
    // temporarydata.getAgentInfo(this.agentData).subscribe(data=>this.student=data)
    this.adminId=temporarydata.getLoginId()
    studentinfo.getAdminById(this.adminId).subscribe({
      next:(result)=>{
          this.adminData=result
      },
      error:(errorResponse:HttpErrorResponse)=>{
        console.log(errorResponse)
      }
    })

  
  }
  

  // selectedId(event:any){
  //   console.log(event.target.value);
  //   this.studentinfo.getAgentById(event.target.value).subscribe((data)=>{
  //     this.student=data;
      
  //   })
  // }
  

  updateAdmin(data:any){

    this.studentinfo.updateAdmin(data).subscribe({
      next:(result)=>{
        alert('Data Updated SuccessFully')
        console.log(result)
        this.router.navigateByUrl('/admin')
      },
      error:(errorResponse:HttpErrorResponse)=>{

        console.log(errorResponse);
        
      }
    })
  }
}
