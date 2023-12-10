import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { TemporaryDataService } from '../service/temporary-data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

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
  updateData:Array<any>
 
  constructor(private locationinfo:InsuranceService,protected temporaryData:TemporaryDataService, private data:DataService,private router:Router){
    this.userRole=temporaryData.getRole()
    this.customerData=new Array<any>()
    this.updateData=new Array<any>()
    debugger
    this.getWithdrawalData()
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
  getWithdrawalData(){
    this.locationinfo.getCommisonWithdrawal().subscribe((data)=>{
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
  updateApprove(id:number){
    // debugger
    this.locationinfo.getCommisonWithdrawalById(id).subscribe((data)=>{
      data.isApproved=true
      this.updateData=data
      this.locationinfo.updateCommisionWithdrawal(this.updateData).subscribe((response)=>{
        // this.router.navigateByUrl('/getCommisionWithdrawal')
        console.log(response)
        this.getWithdrawalData()
        // location.reload()
      })
    })
  }
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
