import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { TemporaryDataService } from '../service/temporary-data.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-change-password',
  templateUrl: './employee-change-password.component.html',
  styleUrls: ['./employee-change-password.component.css']
})
export class EmployeeChangePasswordComponent {

  employeeData:any
  changePasswordEmployee = new FormGroup({
    id:new FormControl(''),
    oldPassword: new FormControl(''),
    newPassword:new FormControl('')
    
  })
  
  student: any=[{}]

  employeeId:number=0;

  constructor(private studentinfo:InsuranceService,private temporarydata: TemporaryDataService,private router:Router){

    
    this.employeeId=temporarydata.getLoginId()
    console.log(this.employeeId)
   

  
  }
  ngOnInit():void{
    // debugger
    var token=localStorage.getItem('token')
    
    var role = localStorage.getItem('role')
    if(token==null){
      alert('Please login')
      this.router.navigateByUrl('/login')
    }
    else if(role!='Employee'){
      alert('Please Login As Employee')
      this.router.navigateByUrl('/login')
    }
  }
  changeEmployeePassword(data:any){

    this.studentinfo.changePasswordEmployee(data).subscribe({
      next:(result)=>{
        alert('Password Changed SuccessFully')
        console.log(result)
        this.router.navigateByUrl('/employee')
      },
      error:(errorResponse:HttpErrorResponse)=>{

        console.log(errorResponse);
        
      }
    })
  }

}
