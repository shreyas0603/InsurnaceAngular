import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { TemporaryDataService } from '../service/temporary-data.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-get-feedback',
  templateUrl: './get-feedback.component.html',
  styleUrls: ['./get-feedback.component.css']
})
export class GetFeedbackComponent {

  queryData:Array<any>;
  page: number = 1;
  totalRecords:number=0 
  customerData:Array<any>
  userRole:string=''
  
  constructor(private queryinfo:InsuranceService,private temporaryData:TemporaryDataService, private router: Router){
    this.queryData=new Array<any>()
    this.customerData=new Array<any>()
    this.userRole=temporaryData.getRole()
    queryinfo.getQuery().subscribe((data)=>{
      this. queryData=data
      this.totalRecords=data.length
      console.log(this.totalRecords)
      console.log(this.queryData);
      // this.collectionSize=this.customerData.length;
    })
    queryinfo.getCustomer().subscribe({
      next:(response)=>{
        this.customerData=response
      },
      error(errorResponse:HttpErrorResponse){
        console.log(errorResponse)
      }
    })
  }
  pageSize:number=5;
  changePageSize(event:any){
    this.pageSize=event.target.value
    console.log(this.pageSize)
  }
  ngOnInit():void{
    // debugger
    var token=localStorage.getItem('token')
    
    var role = localStorage.getItem('role')
    if(token==null){
      alert('Please login')
      this.router.navigateByUrl('/login')
    }
    else if(role!='Admin' && role!='Customer'){
      alert('Please Login As Admin Or Customer')
      this.router.navigateByUrl('/login')
    }
  }
  setId(id:number){
    console.log(id)
    this.temporaryData.setId(id)
    this.router.navigateByUrl("/updateQuery")
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
  
}
