import { Component } from '@angular/core';
import { TemporaryDataService } from '../service/temporary-data.service';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { InsuranceService } from '../service/insurance.service';

@Component({
  selector: 'app-agent-component',
  templateUrl: './agent-component.component.html',
  styleUrls: ['./agent-component.component.css'],
 
})
export class AgentComponentComponent {
  userName:string=''
  token:string | null=null
  agentCustomerCount:number=0
  insuranceAccountCount:number=0
  commisionCount:number=0
  commisionWithdrawalCount:number=0
  policyPaymentsCount:number=0
  policyClaimsCount:number=0
  allCustomer:Array<any>
  constructor(protected temporaryData:TemporaryDataService,private router:Router,private insuranceService:InsuranceService,private dataService:DataService){
    this.userName= dataService.userName
    this.allCustomer=new Array<any>()
    insuranceService.getCustomer().subscribe((data)=>{
      
      this.allCustomer=data
      this.allCustomer=this.allCustomer.filter((x:any)=>x.agentId==dataService.userId)
      this.agentCustomerCount=this.allCustomer.length
    })
    insuranceService.getCustomerInsuranceAccount().subscribe((data)=>{
      var arr=new Array<any>()
      arr=data
      for (let c of this.allCustomer){

        this.insuranceAccountCount=this.insuranceAccountCount+ arr.filter(x=>x.customerId==c.id).length
      }
    })
    insuranceService.getCommision().subscribe((data)=>{
      var arr=new Array<any>()
      arr=data
      this.commisionCount=arr.filter(x=>x.agentId==dataService.userId).length
    })
    insuranceService.getCommisonWithdrawal().subscribe((data)=>{
      var arr=new Array<any>()
      arr=data
      this.commisionWithdrawalCount=arr.filter(x=>x.agentId==dataService.userId).length
    })
    insuranceService.getPolicyPayements().subscribe((data)=>{
      var arr=new Array<any>()
      arr=data
      for (let c of this.allCustomer){

        this.policyPaymentsCount=this.policyPaymentsCount+ arr.filter(x=>x.customerId==c.id).length
      }
      // this.policyPaymentsCount=data.length
    })
    insuranceService.getPolicyClaim().subscribe((data)=>{
      var arr=new Array<any>()
      arr=data
      for (let c of this.allCustomer){

        this.policyClaimsCount=this.policyClaimsCount+ arr.filter(x=>x.customerId==c.id).length
      }
      // this.policyClaimsCount=data.length
    })
  }
  ngOnInit():void{
    this.token=localStorage.getItem('token')
    if(this.token==null){
      alert('Please login')
      this.router.navigateByUrl('/login')
    }
  }
}
