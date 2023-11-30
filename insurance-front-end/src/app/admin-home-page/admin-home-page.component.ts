import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InsuranceService } from '../service/insurance.service';
import { TemporaryDataService } from '../service/temporary-data.service';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.css']
})
export class AdminHomePageComponent {

  userName:string=''
  token:string | null=null
   agentCount:number=0
   employeeCount:number=0
   customerCount:number=0
   insuranceTypeCount:number=0
   insuranceSchemeCount:number=0
   locationCount:number=0
   
  

  constructor(private router:Router,protected temporaryData:TemporaryDataService,private data:DataService,private insuranceService:InsuranceService){
    this.userName= data.userName
    insuranceService.getAgent().subscribe((data)=>{
      this.agentCount=data.length
      console.log(this.agentCount)
    })
    insuranceService.getEmployee().subscribe((data)=>{
      this.employeeCount=data.length
      console.log(this.agentCount)
    })
    insuranceService.getCustomer().subscribe((data)=>{
      this.customerCount=data.length
      console.log(this.agentCount)
    })
    insuranceService.getInsuranceType().subscribe((data)=>{
      this.insuranceTypeCount=data.length
      console.log(this.agentCount)
    })
    insuranceService.getInsuranceScheme().subscribe((data)=>{
      this.insuranceSchemeCount=data.length
      console.log(this.agentCount)
    })
    insuranceService.getLocation().subscribe((data)=>{
      this.locationCount=data.length
      console.log(this.agentCount)
    })

  }
    ngOnInit():void{
      this.token=localStorage.getItem('token')
      if(this.token==null){
        alert('Please login')
        this.router.navigateByUrl('/login')
      }
    }

  addAgentUrl(){
    this.router.navigateByUrl('/AddAgent')
  }
  updateAgentUrl(){
    this.router.navigateByUrl('/update')
  }
  deleteDeleteUrl(){
    this.router.navigateByUrl('/delete')
  }
}
