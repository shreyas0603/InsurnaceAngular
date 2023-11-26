import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { TemporaryDataService } from '../service/temporary-data.service';

@Component({
  selector: 'app-get-commision-withdrawal',
  templateUrl: './get-commision-withdrawal.component.html',
  styleUrls: ['./get-commision-withdrawal.component.css']
})
export class GetCommisionWithdrawalComponent {

  withdrawalData:any;
  total:number=0;
 
 
  constructor(locationinfo:InsuranceService,protected temporaryData:TemporaryDataService){
    
    locationinfo.getCommisonWithdrawal().subscribe((data)=>{
      this. withdrawalData=data
      console.log(this.withdrawalData);
      // this.collectionSize=this.customerData.length;
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
