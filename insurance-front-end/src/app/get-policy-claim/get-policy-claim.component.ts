import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';

@Component({
  selector: 'app-get-policy-claim',
  templateUrl: './get-policy-claim.component.html',
  styleUrls: ['./get-policy-claim.component.css']
})
export class GetPolicyClaimComponent {

  claimData:any;
  page = 1;
	pageSize = 4;
  customers:any;
  collectionSize=0;
  
  constructor(claiminfo:InsuranceService){
    claiminfo.getPolicyClaim().subscribe((data)=>{
      this. claimData=data
      console.log(this. claimData);
      // this.collectionSize=this.customerData.length;
    })
  }
}
