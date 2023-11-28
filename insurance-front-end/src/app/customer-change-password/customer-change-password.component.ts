import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { TemporaryDataService } from '../service/temporary-data.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customer-change-password',
  templateUrl: './customer-change-password.component.html',
  styleUrls: ['./customer-change-password.component.css']
})
export class CustomerChangePasswordComponent {

  customerData:any
  changePasswordCustomer = new FormGroup({
    id:new FormControl(''),
    oldPassword: new FormControl(''),
    newPassword:new FormControl('')
  })
  
  student: any=[{}]

  customerId:number=0;

  constructor(private studentinfo:InsuranceService,private temporarydata: TemporaryDataService,private router:Router){

    // studentinfo.getAgent().subscribe((data)=>{
    //   this.agentData=data
    // })
    // temporarydata.getAgentInfo(this.agentData).subscribe(data=>this.student=data)
    this.customerId=temporarydata.getLoginId()
    console.log(this.customerId)
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
    else if(role!='Customer'){
      alert('Please Login As customer')
      this.router.navigateByUrl('/login')
    }
  }
  changeCustomerPassword(data:any){

    this.studentinfo.changePasswordCustomer(data).subscribe({
      next:(result)=>{
        alert('Password Changed SuccessFully')
        console.log(result)
        this.router.navigateByUrl('/customer')
      },
      error:(errorResponse:HttpErrorResponse)=>{

        console.log(errorResponse);
        
      }
    })
  }
}
