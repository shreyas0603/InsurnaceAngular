import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { TemporaryDataService } from '../service/temporary-data.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-get-policy-payment',
  templateUrl: './get-policy-payment.component.html',
  styleUrls: ['./get-policy-payment.component.css']
})
export class GetPolicyPaymentComponent {

  paymentData:Array<any>;
  notFilteredPayment:Array<any>
  page: number = 1;
  totalRecords:number=0
  userRole:string=''
  customerData:Array<any>
  amount:number=1
  constructor(private paymentinfo:InsuranceService,private temporaryData:TemporaryDataService,private router:Router, private data:DataService){
    this.paymentData=new Array<any>()
    this.notFilteredPayment=new Array<any>()
    this.customerData=new Array<any>()
    this.userRole=temporaryData.getRole()
    this.getPolicyPaymentData()
  }
  getPolicyPaymentData(){
    this.paymentinfo.getPolicyPayements().subscribe((data)=>{
      this. notFilteredPayment=data
      this.totalRecords=data.length
      console.log(this. notFilteredPayment);
      // this.collectionSize=this.customerData.length;
      this.paymentinfo.getCustomer().subscribe({
        next:(response)=>{
          this.customerData=response
          this.filterCustomer()
        },
        error(errorResponse:HttpErrorResponse){
          console.log(errorResponse)
        }
      })
    })
  }
  pageSize:number=5;
  changePageSize(event:any){
    this.pageSize=event.target.value
    console.log(this.pageSize)
  }
  filterCustomer(){
    // var agent=this.agentData.find((a: any) => a.userId === this.dataService.userId)
    debugger
    if((this.userRole=="Agent")){
      this.customerData=this.customerData.filter(x=>x.agentId === this.data.userId)
      console.log('filtered Customer' )
      console.log(this.customerData)
      
      this.filterPayment()
    }
    else{
      this.paymentData=this.notFilteredPayment
    }
  }
  filterPayment(){
    debugger
    for(let c of this.customerData){
      var filter = new Array<any>()
      filter= this.notFilteredPayment.filter(x=>x.customerId === c.id)
      if(filter.length>0){
        for(let f of filter){
          this.paymentData.push(f)
        }
      }
      console.log('filtered account' )
      console.log(this.paymentData)
    
    }
    this.totalRecords=this.paymentData.length
    console.log(this.totalRecords)
  }
  getCustomerName(customerId: number): string {
 
    if (this.customerData) {
      const customer = this.customerData.find((a: any) => a.id === customerId);
      console.log(customer);
      return customer!=null ? `${customer.firstName} ${customer.lastName}` : 'Customer Not Found';
    } else {
      return 'Customer Data Not Loaded';
    }
  }
  ngOnInit():void{
    // debugger
    var token=localStorage.getItem('token')
    
    var role = localStorage.getItem('role')
    if(token==null){
      alert('Please login')
      this.router.navigateByUrl('/login')
    }
   
  }
  setId(id:number){
    console.log(id)
    this.temporaryData.setId(id)
    this.router.navigateByUrl("/updatePolicyPayment")
  }
  deleteData(id:number){
    console.log(id)
    this.paymentinfo.deletePolicyPayments(id).subscribe({
      next:(response)=>{
        alert('data deleted')
        location.reload()
      }
    })
  }
  getAmount(){
    this.paymentinfo.getPolicyPayementsById(44).subscribe((response)=>{
      //var c = response
      this.amount=response.totalAmount
      return this.amount
    })
  }
  options = {
    "key": "rzp_test_84pZkIaemIyf7F", // Enter the Key ID generated from the Dashboard
    "amount": 7066,
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
  
  payAmount(id:number){
    this.paymentinfo.getPolicyPayementsById(id).subscribe((response)=>{
      //var c = response
      this.amount=response.totalAmount
      response.isPaid = true;
      this.paymentinfo.updatePolicyPayments(response).subscribe({
     
        next:(resopnse1:any)=>{
          console.log(resopnse1)
          // location.reload();
          this.getPolicyPaymentData()
          // alert("Policy Claim Added");
          // this.router.navigateByUrl("/admin")
        },
        error(errorResponse:HttpErrorResponse){
          console.log(errorResponse)
        }
       
      })
    })
    this.rzp1 = new this.paymentinfo.nativeWindow.Razorpay(this.options);
    this.rzp1.open();
  }
}
