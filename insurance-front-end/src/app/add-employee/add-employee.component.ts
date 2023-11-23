import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  employeeData:any
  addEmployee = new FormGroup({
    firstName : new FormControl(''),
    lastName : new FormControl(''),
    userName : new FormControl(''),
    password : new FormControl(''),

  })
  userName:string="";
  isUnique:any;
  constructor(private insuranceservice:InsuranceService,private router:Router){

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
  checkUsernameUniqueness(){
    this.insuranceservice.isEmployeeUsernameUnique(this.userName).subscribe({
      next:(result)=>{
          this.isUnique=result;
      },
      error:(Httperror:HttpErrorResponse)=>{
        console.log(Httperror);
       
      }
    })
  }
  addNewEmployee(data:any){
    this.insuranceservice.addEmployee(data).subscribe({
      next:(result)=>{
        alert("Agent Added Successfully")
        console.log(result)
        this.router.navigateByUrl("/admin")
      },
      error:(errorResponse:HttpErrorResponse)=>{
        console.log(errorResponse)
      }
    })
  }

}
