import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { TemporaryDataService } from '../service/temporary-data.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-get-commision',
  templateUrl: './get-commision.component.html',
  styleUrls: ['./get-commision.component.css']
})
export class GetCommisionComponent {

  commisionData:any;
  page = 1;
	pageSize = 4;
  customers:any;
  collectionSize=0;
  total:number=0;
  userRole:string=''

  insurancePlanData:any
  agentData:Array<any>
  customerData:Array<any>
  constructor(private commisioninfo:InsuranceService,private temporaryData:TemporaryDataService, private router: Router, private data:DataService){
    this.userRole=temporaryData.getRole()
    this.customerData=new Array<any>()
    this.agentData=new Array<any>()
    commisioninfo.getCommision().subscribe((data)=>{
      this. commisionData=data
      console.log(this. commisionData);
        // var agent=this.agentData.find((a: any) => a.userId === this.dataService.userId)
        if((this.userRole=="Agent")){
          this.commisionData=this.commisionData.filter((x:any)=>x.agentId === this.data.userId)
          console.log('filtered comm' )
          console.log(this.commisionData)
          
        }
      
      
      commisioninfo.getCustomer().subscribe({
        next:(response)=>{
          this.customerData=response
        },
        error(errorResponse:HttpErrorResponse){
          console.log(errorResponse)
        }
      })
      commisioninfo.getInsurancePlan().subscribe({
        next:(response)=>{
          console.log(response)
          this.insurancePlanData=response
        },
        error(errorResponse:HttpErrorResponse){
          console.log(errorResponse)
        }
      })
      commisioninfo.getAgent().subscribe({
        next:(response)=>{
          this.agentData=response
        },
        error(errorResponse:HttpErrorResponse){
          console.log(errorResponse)
        }
      })
      
      // this.collectionSize=this.customerData.length;
    })
  }
  getAgentName(agentId:number):string{
 
    //  debugger
      if(this.agentData){
        console.log(this.agentData);
       
        const agent=this.agentData.find((a:any)=>a.id===agentId)
        console.log(agent);
        return agent!=null ? `${agent.firstName} ${agent.lastName}` : 'Agent Not Found';
      }
      else{
        return 'Agent Data Not Loaded';
      }
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
    else if(role!='Admin' && role!='Agent' && role!='Employee'){
      alert('Please Login As Admin Or Agent Or Employee')
      this.router.navigateByUrl('/login')
    }
  }
  setId(id:number){
    console.log(id)
    this.temporaryData.setId(id)
    this.router.navigateByUrl("/updateCommision")
  }
  deleteData(id:number){
    console.log(id)
    this.commisioninfo.deleteCommision(id).subscribe({
      next:(response)=>{
        alert('data deleted')
        location.reload()
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
