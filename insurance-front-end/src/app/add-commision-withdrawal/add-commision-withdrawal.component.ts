import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
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
  isGreater:boolean=true
  addWithrawal = new FormGroup({
    // id: new FormGroup(''),
    requestDate : new FormControl(''),
    withdrawalAmount: new FormControl(''),
    agentId:new FormControl('',[Validators.required, this.maxValue(500)]),
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
  maxValue(max: number) {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
  
      if (isNaN(value) || value > max) {
        return { maxValue: { max } };
      }
  
      return null;
    };
  }
  addCommisionWithdrawal(data:any){
    this.insuranceservice.addCommisionWithdrawal(data).subscribe({
      next:(result)=>{
        alert("Commision withdrawal Added Successfully")
        console.log(result)
        this.router.navigateByUrl("/agent")
      },
      error:(errorResponse:HttpErrorResponse)=>{
        console.log(errorResponse)
      }
    })
  }
  amount:number=0
  checkIfAmountIsGreater(){
    const t = this.calculateTotal()
    this.makeTotalZero()
    if(t<this.amount){
      this.isGreater=false
    }
    else{
      this.isGreater=true
    }
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
