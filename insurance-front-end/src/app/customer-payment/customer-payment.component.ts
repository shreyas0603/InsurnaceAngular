import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { TemporaryDataService } from '../service/temporary-data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-customer-payment',
  templateUrl: './customer-payment.component.html',
  styleUrls: ['./customer-payment.component.css']
})
export class CustomerPaymentComponent {

  payment = new FormGroup({
    paidAmount : new FormControl('', [Validators.required]),
    taxAmount : new FormControl('', [Validators.required]),
    totalAmount : new FormControl('', [Validators.required]),
    paidDate : new FormControl('', [Validators.required]),
    transactionType : new FormControl('', [Validators.required]),
    customerId : new FormControl('', [Validators.required]),
    insurancePlanId : new FormControl('', [Validators.required]),
  })
  date=new Date().toISOString().split('T')[0];
  taxAmt:number=0
  totalAmt:number=0
  transactionType:string='RazorPay'
  customerId:number=0
  installments:number=0
  customerInsId:any=0
  constructor(protected auth:InsuranceService,protected temporaryData:TemporaryDataService){
    this.taxAmt=temporaryData.installmentAmt*0.06
    this.totalAmt=temporaryData.installmentAmt*1+this.taxAmt*1
    
    this.customerId=temporaryData.getLoginId()
    //Modifying the installment Amount
    // this.temporaryData.installmentAmt=this.totalAmt
  }
   
  options = {
    "key": "rzp_test_84pZkIaemIyf7F", // Enter the Key ID generated from the Dashboard
    "amount": this.temporaryData.installmentAmt*100,
    "currency": "INR",
    "description": "Acme Corp",
    "image": "https://s3.amazonaws.com/rzp-mobile/images/rzp.jpg",
    "prefill":
    {
      "email": "gaurav.kumar@example.com",
      "contact": +919900000000,
    },
    config: {
      display: {
        blocks: {
          utib: { //name for Axis block
            name: "Pay using Axis Bank",
            instruments: [
              {
                method: "card",
                issuers: ["UTIB"]
              },
              {
                method: "netbanking",
                banks: ["UTIB"]
              },
              {
                method: 'upi'
              },
            ]
          },
          other: { //  name for other block
            name: "Other Payment modes",
            instruments: [
              {
                method: "card",
                issuers: ["ICIC"]
              },
              {
                method: 'netbanking',
              }
            ]
          }
        },
        // hide: [
        //   {
        //   method: "upi"
        //   }
        // ],
        sequence: ["block.utib", "block.other"],
        preferences: {
          show_default_blocks: false // Should Checkout show its default blocks?
        }
      }
    },
    // "handler": function (response) {
    //   alert(response.razorpay_payment_id);
    // },
    "modal": {
      "ondismiss": function () {
        if (confirm("Are you sure, you want to close the form?")) {
          const txt = "You pressed OK!";
          console.log("Checkout form closed by the user");
        } else {
          const txt = "You pressed Cancel!";
          console.log("Complete the Payment")
        }
      }
    }
  };

  rzp1:any;
  pay(data:any){
    debugger
    this.auth.addCustomerInsuranceAccount(this.temporaryData.insuraanceAccountData).subscribe((response)=>{
      console.log(response)
      
      const id=response
      this.customerInsId=id
      this.installments = this.temporaryData.policyTerm *(12/this.temporaryData.months)
      data.customerInsuranceAccountId=this.customerInsId
      data.isPaid=true
      this.auth.addPolicyPayments(data).subscribe({
        next:(response)=>{
        console.log(response)
        this.addInstallments(data)
        console.log(Math.round(this.installments)*1);
        console.log(this.installments);
        },
        error(errorResponse:HttpErrorResponse){
          console.log(errorResponse)
        }
      })
    })
    
    console.log(Math.round(this.totalAmt)*1);
    console.log(this.totalAmt);
    
    this.rzp1 = new this.auth.nativeWindow.Razorpay(this.options);
    this.rzp1.open();
    
  }
  addInstallments(data:any): void{
    data.isPaid=false
    // data.date=null
    // const installments = this.temporaryData.policyTerm *(12/this.temporaryData.months)
    for(let i=0;i<this.installments-1;i++)
    {
      var date = new Date(data.paidDate+'T02:00:00Z')
      var year = date.getFullYear();
      var month = date.getMonth()+1;
      var dt = date.getDate();

      // if (dt < 10) {
      //   dt = '0' + dt;
      // }
      // if (month < 10) {
      //   month = '0' + month;
      // }
      data.paidDate=new Date(year , month + this.temporaryData.months*1 , dt).toISOString().split('T')[0];
      
      // data.paidDate=data.paidDate
      this.auth.addPolicyPayments(data).subscribe((response)=>{
        console.log(response)
      })
    }
  }

}
