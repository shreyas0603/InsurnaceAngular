import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { TemporaryDataService } from '../service/temporary-data.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent {

  empData:any
  addEmp = new FormGroup({
    id:new FormControl(''),
    firstName : new FormControl(''),
    lastName : new FormControl(''),
    userName : new FormControl(''),
    password : new FormControl(''),
  })
  
  student: any=[{}]

  empId:number=0;

  constructor(private studentinfo:InsuranceService,private temporarydata: TemporaryDataService,private router:Router){

    // studentinfo.getAgent().subscribe((data)=>{
    //   this.agentData=data
    // })
    // temporarydata.getAgentInfo(this.agentData).subscribe(data=>this.student=data)
    this.empId=temporarydata.getLoginId()
    studentinfo.getEmployeeById(this.empId).subscribe({
      next:(result)=>{
          this.empData=result
      },
      error:(errorResponse:HttpErrorResponse)=>{
        console.log(errorResponse)
      }
    })

  
  }
  ngOnInit():void{
    // debugger
    var token=localStorage.getItem('token')
    
    var role = localStorage.getItem('role')
    if(token==null){
      alert('Please login')
      this.router.navigateByUrl('/login')
    }
    else if(role!='Admin' && role!='Employee'){
      alert('Please Login As Admin')
      this.router.navigateByUrl('/login')
    }
  }

  // selectedId(event:any){
  //   console.log(event.target.value);
  //   this.studentinfo.getAgentById(event.target.value).subscribe((data)=>{
  //     this.student=data;
      
  //   })
  // }
  

  updateAdmin(data:any){

    this.studentinfo.updateEmployee(data).subscribe({
      next:(result)=>{
        alert('Data Updated SuccessFully')
        console.log(result)
        // this.router.navigateByUrl('/admin')
      },
      error:(errorResponse:HttpErrorResponse)=>{

        console.log(errorResponse);
        
      }
    })
  }

}
