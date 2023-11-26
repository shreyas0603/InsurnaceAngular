import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InsuranceService } from '../service/insurance.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { TemporaryDataService } from '../service/temporary-data.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-add-commision-withdrawal',
  templateUrl: './add-commision-withdrawal.component.html',
  styleUrls: ['./add-commision-withdrawal.component.css']
})
export class AddCommisionWithdrawalComponent {

  commisionData:any
  total:number=0;
  totalWithdrawalAmount:number=0
  addWithrawal = new FormGroup({
    // id: new FormGroup(''),
    requestDate : new FormControl(''),
    withdrawalAmount: new FormControl(''),
    agentId:new FormControl(''),
    // isApproved:new FormControl('')
   
  })
  agentId:number=0
  constructor(private insuranceservice:InsuranceService,private router:Router,protected temporaryData:TemporaryDataService){
    // debugger
    this.agentId=temporaryData.getLoginId()
    console.log(this.agentId)
    insuranceservice.getCommision().subscribe({
      next:(result)=>{
        this. commisionData=result
      console.log(this. commisionData);
      },
      error(errorResponse:HttpErrorResponse){
        console.log(errorResponse)
        alert(errorResponse.error)
      }
    }
      )
    // this.calculateTotal()
    // this.makeTotalZero()
  }
 
  addCommisionWithdrawal(data:any){
    this.insuranceservice.addCommisionWithdrawal(data).subscribe({
      next:(result)=>{
        alert("Commision withdrawal Added Successfully")
        console.log(result)
        // this.router.navigateByUrl("/admin")
      },
      error:(errorResponse:HttpErrorResponse)=>{
        console.log(errorResponse)
      }
    })
  }
 
  calculateTotal() {
    // if (!this.commisionData) {
    //   return 0;
    // }
 
   for (var commision of this.commisionData){
    this.total=this.total+commision.commisionAmount
   }
   return this.total
  }
 
  makeTotalZero(){
    this.total=0;
  }
}
