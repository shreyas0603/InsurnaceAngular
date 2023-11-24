import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InsuranceService } from '../service/insurance.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { TemporaryDataService } from '../service/temporary-data.service';

@Component({
  selector: 'app-add-agent',
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.css']
})
export class AddAgentComponent {

  agentDat:any
  addAgent = new FormGroup({
    firstName : new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    lastName : new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    userName : new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9]*'), Validators.minLength(3), Validators.maxLength(50)]),
    password : new FormControl('', [Validators.required,  Validators.minLength(6),
       Validators.maxLength(15), this.validateSpecialChar]),
    mobileNumber: new FormControl('', [Validators.required,  Validators.minLength(10), Validators.maxLength(10),
       Validators.pattern('^[0-9]*$')]),
    email:new FormControl('', [Validators.required, Validators.email])
  

  })
  validateSpecialChar(control:any) {
    const specialCharRegex = /[!@#$%^&*]/;
    if (control.value && !specialCharRegex.test(control.value)) {
      return { specialChar: true };
    }
    return null;
  }
  userName:string="";
  isUnique:any;
  constructor(private agentInfo:InsuranceService,private router:Router,private temporaryData:TemporaryDataService){

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
    this.agentInfo.isAgentUsernameUnique(this.userName).subscribe({
      next:(result)=>{
          this.isUnique=result;
      },
      error:(Httperror:HttpErrorResponse)=>{
        console.log(Httperror);
       
      }
    })
  }
  addNewAgent(data:any){
    this.agentInfo.addAgent(data).subscribe({
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
