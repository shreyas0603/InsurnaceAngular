import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { TemporaryDataService } from '../service/temporary-data.service';
import { Router } from '@angular/router';

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
  userRole:string=''
  constructor(claiminfo:InsuranceService,private temporaryData:TemporaryDataService,private router:Router){
    this.userRole=temporaryData.getRole()
    claiminfo.getPolicyClaim().subscribe((data)=>{
      this. claimData=data
      console.log(this. claimData);
      // this.collectionSize=this.customerData.length;
    })
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
      alert('Please Login As Admin Or Agent')
      this.router.navigateByUrl('/login')
    }
  }
}
