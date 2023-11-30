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
  constructor(protected temporaryData:TemporaryDataService,private router:Router, private data:DataService,private insuranceService:InsuranceService){
    this.userName= data.userName
    insuranceService.getCustomer().subscribe((data)=>{
      this.agentCustomerCount=data.length
    })
    insuranceService.getCustomerInsuranceAccount().subscribe((data)=>{
      this.insuranceAccountCount=data.length
    })
    insuranceService.getCommision().subscribe((data)=>{
      this.commisionCount=data.length
    })
    insuranceService.getCommisonWithdrawal().subscribe((data)=>{
      this.commisionWithdrawalCount=data.length
    })
    insuranceService.getPolicyPayements().subscribe((data)=>{
      this.policyPaymentsCount=data.length
    })
    insuranceService.getPolicyClaim().subscribe((data)=>{
      this.policyClaimsCount=data.length
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
