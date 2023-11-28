import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { TemporaryDataService } from '../service/temporary-data.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent {

  customerData:any
  addCustomer= new FormGroup({
    id:new FormControl(''),
    dateOfBirth:new FormControl(''),
    firstName : new FormControl(''),
    lastName : new FormControl(''),
    userName : new FormControl(''),
    password : new FormControl(''),
    mobileNumber:new FormControl(''),
    email:new FormControl(''),
    nomineeName:new FormControl(''),
    nomineeRelation:new FormControl(''),
    locationId:new FormControl(''),
    agentId:new FormControl('')
  })
  
  student: any=[{}]

  customerId:number=0;
  locationData:any
  locationIdData:any

  constructor(private studentinfo:InsuranceService,private temporarydata: TemporaryDataService,private router:Router){

    // studentinfo.getAgent().subscribe((data)=>{
    //   this.agentData=data
    // })
    // temporarydata.getAgentInfo(this.agentData).subscribe(data=>this.student=data)
    this.customerId=temporarydata.getLoginId()
    studentinfo.getCustomerById(this.customerId).subscribe({
      next:(result)=>{
          this.customerData=result
          this.getLocation(this.customerData.locationId)
          console.log(this.customerData)
      },
      error:(errorResponse:HttpErrorResponse)=>{
        console.log(errorResponse)
      }
    })
    studentinfo.getLocation().subscribe({
      next:(result)=>{
        this.locationData=result
      },
      error:(errorResponse:HttpErrorResponse)=>{
        console.log(errorResponse)
      }
    })
    
  }
  getLocation(id:number){
    this.studentinfo.getLocationById(id).subscribe({
      next:(result)=>{
        this.locationIdData=result
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
    else if(role!='Customer'){
      alert('Please Login As Customer')
      this.router.navigateByUrl('/login')
    }
  }

  // selectedId(event:any){
  //   console.log(event.target.value);
  //   this.studentinfo.getAgentById(event.target.value).subscribe((data)=>{
  //     this.student=data;
      
  //   })
  // }
  

  updateCustomer(data:any){

    this.studentinfo.updateCustomer(data).subscribe({
      next:(result)=>{
        alert('Data Updated SuccessFully')
        console.log(result)
        this.router.navigateByUrl('/customer')
      },
      error:(errorResponse:HttpErrorResponse)=>{

        console.log(errorResponse);
        
      }
    })
  }
}
