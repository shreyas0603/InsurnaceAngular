import { Component } from '@angular/core';
// import { MatPaginatorModule, PageEvent } from '@angular/material/paginator'; 
// import {MatTableDataSource} from '@angular/material/table';
import { InsuranceService } from '../service/insurance.service';
import { HttpErrorResponse } from '@angular/common/http';
import { TemporaryDataService } from '../service/temporary-data.service';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-get-agent-customer',
  templateUrl: './get-agent-customer.component.html',
  styleUrls: ['./get-agent-customer.component.css']
})
export class GetAgentCustomerComponent {

  customerData:Array<any>;
  page: number = 1;
  totalRecords:number=0 
  customers:any;
  collectionSize=0;
 
  userRole:string=''
  locationData:any
  agentData:any
  
  
  constructor(private customerinfo:InsuranceService,protected temporaryData:TemporaryDataService,private router:Router,private datas:DataService){
    debugger
    this.customerData=new Array<any>()
    this.userRole=temporaryData.getRole()
    console.log(this.userRole)
    // this.insurnaceService=customerinfo
    customerinfo.getCustomer().subscribe((data)=>{
      this.customerData=data
      this.totalRecords=data.length
      console.log(this.totalRecords)
      console.log(this.userRole)
      console.log(this.customerData);
      this.filterCustomer()
    console.log('jdsc' +this.customerData)
      // this.collectionSize=this.customerData.length;
      // customerinfo.getLocation().subscribe({
      //   next:(response)=>{
      //     console.log(response)
      //     this.locationData=response
      //   },
      //   error(errorResponse:HttpErrorResponse){
      //     console.log(errorResponse)
      //   }
      // })
      // customerinfo.getAgent().subscribe({
      //   next:(response)=>{
      //     this.agentData=response
      //   },
      //   error(errorResponse:HttpErrorResponse){
      //     console.log(errorResponse)
      //   }
      // })
    })
    
    
    // customerinfo
    // this.refreshCountries();
  }
  filterCustomer(){
    if(localStorage.getItem('role')=="Agent"){
      this.customerData=this.customerData.filter(x=>x.agentId===this.datas.userId)
      console.log('jdsc' + this.customerData)
    }
  }
  setCount(count:number){
   
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
      alert('Please Login As Admin or Agent')
      this.router.navigateByUrl('/login')
    }
  }
  setId(id:number){
    console.log(id)
    this.temporaryData.setId(id)
    this.router.navigateByUrl("/updateCustomer")
  }
  deleteData(id:number){
    console.log(id)
    this.customerinfo.deleteCustomerInsuranceAccount(id).subscribe({
      next:(response)=>{
        alert('data deleted')
        location.reload()
      }
    })
  }
}
