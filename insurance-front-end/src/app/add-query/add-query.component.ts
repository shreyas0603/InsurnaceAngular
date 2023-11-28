import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TemporaryDataService } from '../service/temporary-data.service';

@Component({
  selector: 'app-add-query',
  templateUrl: './add-query.component.html',
  styleUrls: ['./add-query.component.css']
})
export class AddQueryComponent {

  queryData:any
  addQuery = new FormGroup({
    queryTitle : new FormControl('', [Validators.required, Validators.maxLength(50)]),
    queryMessage : new FormControl('', [Validators.required, Validators.maxLength(100)]),
    queryDate : new FormControl('', [Validators.required]),
    reply : new FormControl(''),
    customerId : new FormControl(''),
   
  })
  getCustomerId:number=0
  constructor(private insuranceservice:InsuranceService,private router:Router, private temporaryData:TemporaryDataService){
    this.getCustomerId=temporaryData.getLoginId()
    console.log(this.getCustomerId)
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
  addNewQuery(data:any){
    console.log(data)
    this.insuranceservice.addQuery(data).subscribe({
      next:(result)=>{
        alert("Query Added Successfully")
        console.log(result)
        this.router.navigateByUrl("/customer")
      },
      error:(errorResponse:HttpErrorResponse)=>{
        console.log(errorResponse)
      }
    })
  }
}
