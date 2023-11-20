import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';

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
  
  constructor(commisioninfo:InsuranceService){
    commisioninfo.getCommision().subscribe((data)=>{
      this. commisionData=data
      console.log(this. commisionData);
      // this.collectionSize=this.customerData.length;
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
