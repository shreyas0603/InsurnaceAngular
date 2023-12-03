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
  constructor(private paymentinfo:InsuranceService,private temporaryData:TemporaryDataService,private router:Router, private data:DataService){
    this.paymentData=new Array<any>()
    this.notFilteredPayment=new Array<any>()
    this.customerData=new Array<any>()
    this.userRole=temporaryData.getRole()
    paymentinfo.getPolicyPayements().subscribe((data)=>{
      this. notFilteredPayment=data
      this.totalRecords=data.length
      console.log(this. notFilteredPayment);
      // this.collectionSize=this.customerData.length;
    })
    paymentinfo.getCustomer().subscribe({
      next:(response)=>{
        this.customerData=response
        this.filterCustomer()
      },
      error(errorResponse:HttpErrorResponse){
        console.log(errorResponse)
      }
    })
  }
  filterCustomer(){
    // var agent=this.agentData.find((a: any) => a.userId === this.dataService.userId)
    if((this.userRole=="Agent")){
      this.customerData=this.customerData.filter(x=>x.agentId === this.data.userId)
      console.log('filtered Customer' )
      console.log(this.customerData)
      
      this.filterPayment()
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
  ngOnInit():void{
    // debugger
    var token=localStorage.getItem('token')
    
    var role = localStorage.getItem('role')
    if(token==null){
      alert('Please login')
      this.router.navigateByUrl('/login')
    }
    else if(role!='Admin' && role!='Agent'){
      alert('Please Login As Admin Or Agent')
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
}
