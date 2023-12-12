import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { Router } from '@angular/router';
import { TemporaryDataService } from '../service/temporary-data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {

  customerDat:any
  
  addCustomer = new FormGroup({
    dateOfBirth : new FormControl('',Validators.required),
    firstName : new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    lastName : new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    userName : new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9]*'), Validators.minLength(3), Validators.maxLength(50)]),
    password : new FormControl('', [Validators.required,  Validators.minLength(6),
       Validators.maxLength(15), this.validateSpecialChar]),
    mobileNumber : new FormControl('', [Validators.required,  Validators.minLength(10), Validators.maxLength(10),
       Validators.pattern('^[0-9]*$')]),
    email :new FormControl('', [Validators.required, Validators.email]),
    nomineeName : new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    nomineeRelation : new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    agentId:new FormControl(''),
    locationId:new FormControl('')

  })
  agentId:number=0
  locationId:number=3
  validateSpecialChar(control:any) {
    const specialCharRegex = /[!@#$%^&*]/;
    if (control.value && !specialCharRegex.test(control.value)) {
      return { specialChar: true };
    }
    return null;
  }
  userName:string="";
  isUnique:any;
  locationData:Array<any>
  
  constructor(private customerInfo:InsuranceService,private router:Router,protected temporaryData:TemporaryDataService){
    //debugger
    // if(temporaryData.getLoginId()!=0){
      this.agentId=temporaryData.getLoginId()
    // }
    // this.agentId=11
    this.locationData=new Array<any>()
    customerInfo.getLocation().subscribe({
      next:(result)=>{
        this.locationData=result

      },
      error(errorResponse:HttpErrorResponse){
        console.log(errorResponse)
      }
      
    })
    console.log(this.locationData);
    
  }
  // ngOnInit():void{
  //   // debugger
  //   var token=localStorage.getItem('token')
    
  //   var role = localStorage.getItem('role')
  //   if(token==null){
  //     alert('Please login')
  //     this.router.navigateByUrl('/login')
  //   }
  //   else if(role!='Admin'){
  //     alert('Please Login As Admin')
  //     this.router.navigateByUrl('/login')
  //   }
  // }
  checkUsernameUniqueness(){
    this.customerInfo.isCustomerUsernameUnique(this.userName).subscribe({
      next:(result)=>{
          this.isUnique=result;
      },
      error:(Httperror:HttpErrorResponse)=>{
        console.log(Httperror);
       
      }
    })
  }
  
  addNewCustomer(data:any){
    debugger
    if(this.temporaryData.getLoginId()==0){
      // data.agentId=this.temporaryData.getLoginId()
      data.agentId=null
    }
    else{
      data.agentId=this.temporaryData.getLoginId()
    }
    this.customerInfo.addCustomer(data).subscribe({
      next:(result)=>{
        alert("Customer Added Successfully")
        if(this.temporaryData.getRole()=='Agent'){
          this.router.navigateByUrl('/agentCustomer')
        }
        else{
          this.router.navigateByUrl('/login')
        }
        console.log(result)
        // this.router.navigateByUrl("/admin")
      },
      error:(errorResponse:HttpErrorResponse)=>{
        console.log(errorResponse)
      }
    })
  }
}
