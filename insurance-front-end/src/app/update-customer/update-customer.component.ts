import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { TemporaryDataService } from '../service/temporary-data.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent {

  customerForm=new FormGroup({
    id:new FormControl(''),
    dateOfBirth:new FormControl(''),
    userName:new FormControl(''),
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    password:new FormControl(''),
    mobileNumber:new FormControl(''),
    email:new FormControl(''),
    nomineeName:new FormControl(''),
    nomineeRelation:new FormControl(''),
    locationId:new FormControl(''),
    agentId:new FormControl('')
  })

  customerData:any
  customerId:number=0

  constructor(private customerinfo:InsuranceService,private temporaryData: TemporaryDataService,private router:Router){
    temporaryData.getId.subscribe(id=>this.customerId=id)
    //thi.id=temporaryData.getId()
    customerinfo.getCustomerById(this.customerId).subscribe({
      next:(result)=>{
        this.customerData=result
        console.log(this.customerData)
      },
      error(errorResponse:HttpErrorResponse){
        console.log(errorResponse)
      }
    })
    console.log(this.customerId)
    
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
  updateCustomer(data:any){
    // this.insuranceTypeForm.id=this.insuranceTypeId
    console.log(data)
    this.customerinfo.updateCustomer(data).subscribe({
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
