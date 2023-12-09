import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { TemporaryDataService } from '../service/temporary-data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-get-commision-withdrawal',
  templateUrl: './get-commision-withdrawal.component.html',
  styleUrls: ['./get-commision-withdrawal.component.css']
})
export class GetCommisionWithdrawalComponent {

  withdrawalData:any;
  total:number=0;
  agentData:any
  userRole:string=''
  customerData:Array<any>
 
  constructor(private locationinfo:InsuranceService,protected temporaryData:TemporaryDataService, private data:DataService){
    this.userRole=temporaryData.getRole()
    this.customerData=new Array<any>()
    
    locationinfo.getCommisonWithdrawal().subscribe((data)=>{
      this. withdrawalData=data
      console.log(this.withdrawalData);
      // this.collectionSize=this.customerData.length;
      if((this.userRole=="Agent")){
        this.withdrawalData=this.withdrawalData.filter((x:any)=>x.agentId === this.data.userId)
        console.log('filtered comm' )
        console.log(this.withdrawalData)
        
      }
    })
  }
  
  // getAgentName(id:number){
  //   debugger
  //   this.locationinfo.getAgentById(id).subscribe({
  //     next:(result)=>{
  //       this.agentData=result
  //       return this.agentData.userName
  //     },
  //     error(errorResponse:HttpErrorResponse){
  //       console.log(errorResponse)
  //       alert(errorResponse.error)
  //     }
  //   })
  //   console.log(this.agentData.userName);
    
  // }
  calculateTotal() {
    // if (!this.commisionData) {
    //   return 0;
    // }
 
    for (var withdrawal of this.withdrawalData){
      this.total=this.total+withdrawal.withdrawalAmount
    }
   return this.total
  }
 
  makeTotalZero(){
    this.total=0;
  }
}
