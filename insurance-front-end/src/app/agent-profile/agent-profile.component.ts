import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InsuranceService } from '../service/insurance.service';
import { TemporaryDataService } from '../service/temporary-data.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-agent-profile',
  templateUrl: './agent-profile.component.html',
  styleUrls: ['./agent-profile.component.css']
})
export class AgentProfileComponent {

  agentData:any
  addAgent = new FormGroup({
    id:new FormControl(''),
    firstName : new FormControl(''),
    lastName : new FormControl(''),
    userName : new FormControl(''),
    password : new FormControl(''),
    mobileNumber: new FormControl(''),
    email:new FormControl(''),
    commision:new FormControl(''),
    totalCommision:new FormControl('')
  })
  
  student: any=[{}]

  agentId:number=0;

  constructor(private studentinfo:InsuranceService,private temporarydata: TemporaryDataService,private router:Router){

    // studentinfo.getAgent().subscribe((data)=>{
    //   this.agentData=data
    // })
    // temporarydata.getAgentInfo(this.agentData).subscribe(data=>this.student=data)
    this.agentId=temporarydata.getLoginId()
    studentinfo.getAgentById(this.agentId).subscribe({
      next:(result)=>{
          this.agentData=result
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
    else if(role!='Agent'){
      alert('Please Login As Agent')
      this.router.navigateByUrl('/login')
    }
  }
  // selectedId(event:any){
  //   console.log(event.target.value);
  //   this.studentinfo.getAgentById(event.target.value).subscribe((data)=>{
  //     this.student=data;
      
  //   })
  // }
  

  updateAgent(data:any){

    this.studentinfo.updateAgent(data).subscribe({
      next:(result)=>{
        alert('Agent Data Updated SuccessFully')
        console.log(result)
        this.router.navigateByUrl('/agent')
      },
      error:(errorResponse:HttpErrorResponse)=>{

        console.log(errorResponse);
        
      }
    })
  }


}
