import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { TemporaryDataService } from '../service/temporary-data.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-get-policy-claim',
  templateUrl: './get-policy-claim.component.html',
  styleUrls: ['./get-policy-claim.component.css']
})
export class GetPolicyClaimComponent {

  claimData:Array<any>;
  customerData:Array<any>
  notFilteredClaim:Array<any>
 
  page: number = 1;
  totalRecords:number=0
  userRole:string=''
  constructor(claiminfo:InsuranceService,private temporaryData:TemporaryDataService,private router:Router,private data:DataService){
    this.claimData=new Array<any>()
    this.customerData=new Array<any>()
    this.notFilteredClaim=new Array<any>()
    this.userRole=temporaryData.getRole()
    claiminfo.getPolicyClaim().subscribe((data)=>{
      this. notFilteredClaim=data
      console.log(this. claimData);
      this.totalRecords=data.length
      console.log(this.totalRecords)
      // this.collectionSize=this.customerData.length;
    })
    claiminfo.getCustomer().subscribe({
      next:(response)=>{
        this.customerData=response
        this.filterCustomer()
      },
      error(errorResponse:HttpErrorResponse){
        console.log(errorResponse)
      }
    })
    // claiminfo.getPolicyClaim().subscribe((data)=>{
    //   this. claimData=data
    //   console.log(this. claimData);
    //   // this.collectionSize=this.customerData.length;
    // })
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
  filterCustomer(){
    // var agent=this.agentData.find((a: any) => a.userId === this.dataService.userId)
    if((this.userRole=="Agent")){
      this.customerData=this.customerData.filter(x=>x.agentId === this.data.userId)
      console.log('filtered Customer' )
      console.log(this.customerData)
      
      this.filterPayment()
    }
    else{
      this.claimData=this.notFilteredClaim
    }
  }
  filterPayment(){
    debugger
    for(let c of this.customerData){
      var filter = new Array<any>()
      filter= this.notFilteredClaim.filter(x=>x.customerId === c.id)
      if(filter.length>0){
        for(let f of filter){
          this.claimData.push(f)
        }
      }
      console.log('filtered account' )
      console.log(this.claimData)
    
    }
    this.totalRecords=this.claimData.length
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
}
