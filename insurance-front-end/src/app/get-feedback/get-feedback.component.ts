import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { TemporaryDataService } from '../service/temporary-data.service';
import { Router } from '@angular/router';

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
  
  constructor(private queryinfo:InsuranceService,private temporaryData:TemporaryDataService, private router: Router){
    queryinfo.getQuery().subscribe((data)=>{
      this. queryData=data
      console.log(this.queryData);
      // this.collectionSize=this.customerData.length;
    })
  }
  setId(id:number){
    console.log(id)
    this.temporaryData.setId(id)
    this.router.navigateByUrl("/updateQuery")
  }
  
}
