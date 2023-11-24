import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { TemporaryDataService } from '../service/temporary-data.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {

  employeeForm=new FormGroup({
    id:new FormControl(''),
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    userName:new FormControl(''),
    password:new FormControl(''),
  })

  employeeData:any
  employeeId:number=0

  constructor(private employeeinfo:InsuranceService,private temporaryData: TemporaryDataService,private router:Router){
    temporaryData.getId.subscribe(id=>this.employeeId=id)
    //thi.id=temporaryData.getId()
    employeeinfo.getEmployeeById(this.employeeId).subscribe({
      next:(result)=>{
        this.employeeData=result
      },
      error(errorResponse:HttpErrorResponse){
        console.log(errorResponse)
      }
    })
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
    else if(role!='Admin'){
      alert('Please Login As Admin')
      this.router.navigateByUrl('/login')
    }
  }
  updateEmployee(data:any){
    // this.insuranceTypeForm.id=this.insuranceTypeId
    console.log(data)
    this.employeeinfo.updateEmployee(data).subscribe({
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
