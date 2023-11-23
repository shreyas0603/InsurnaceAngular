import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { TemporaryDataService } from '../service/temporary-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-agent',
  templateUrl: './get-agent.component.html',
  styleUrls: ['./get-agent.component.css']
})
export class GetAgentComponent {

  
  agentData:any;
  page = 1;
	pageSize = 4;
  customers:any;
  collectionSize=0;
  
  constructor(private agentinfo:InsuranceService,protected temporaryData:TemporaryDataService, private router: Router){
    agentinfo.getAgent().subscribe((data)=>{
      this. agentData=data
      console.log(this.agentData);
      // this.collectionSize=this.customerData.length;
    })
  }
  setId(id:number){
    console.log(id)
    this.temporaryData.setId(id)
    this.router.navigateByUrl("/updateAgent")
  }
  deleteData(id:number){
    console.log(id)
    this.agentinfo.deleteAgent(id).subscribe({
      next:(response)=>{
        alert('data deleted')
      }
    })
  }
}