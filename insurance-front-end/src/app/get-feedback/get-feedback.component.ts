import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';

@Component({
  selector: 'app-get-feedback',
  templateUrl: './get-feedback.component.html',
  styleUrls: ['./get-feedback.component.css']
})
export class GetFeedbackComponent {

  queryData:any;
  page = 1;
	pageSize = 4;
  customers:any;
  collectionSize=0;
  
  constructor(queryinfo:InsuranceService){
    queryinfo.getQuery().subscribe((data)=>{
      this. queryData=data
      console.log(this.queryData);
      // this.collectionSize=this.customerData.length;
    })
  }
}
