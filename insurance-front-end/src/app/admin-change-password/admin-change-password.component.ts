import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { TemporaryDataService } from '../service/temporary-data.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-change-password',
  templateUrl: './admin-change-password.component.html',
  styleUrls: ['./admin-change-password.component.css']
})
export class AdminChangePasswordComponent {

  adminData:any
  changePasswordAdmin = new FormGroup({
    id:new FormControl(''),
    oldPassword: new FormControl(''),
    newPassword:new FormControl('')
  })
  
  student: any=[{}]

  adminId:number=0;

  constructor(private studentinfo:InsuranceService,private temporarydata: TemporaryDataService,private router:Router){

    // studentinfo.getAgent().subscribe((data)=>{
    //   this.agentData=data
    // })
    // temporarydata.getAgentInfo(this.agentData).subscribe(data=>this.student=data)
    this.adminId=temporarydata.getLoginId()
    // studentinfo.getAdminById(this.adminId).subscribe({
    //   next:(result)=>{
    //       this.adminData=result
    //   },
    //   error:(errorResponse:HttpErrorResponse)=>{
    //     console.log(errorResponse)
    //   }
    // })

  
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
  changeAdminPassword(data:any){

    this.studentinfo.changePasswordAdmin(data).subscribe({
      next:(result)=>{
        alert('Password Changed SuccessFully')
        console.log(result)
        this.router.navigateByUrl('/admin')
      },
      error:(errorResponse:HttpErrorResponse)=>{

        console.log(errorResponse);
        
      }
    })
  }
}
