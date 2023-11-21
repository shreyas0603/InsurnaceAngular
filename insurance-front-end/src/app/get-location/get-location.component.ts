import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';

@Component({
  selector: 'app-get-location',
  templateUrl: './get-location.component.html',
  styleUrls: ['./get-location.component.css']
})
export class GetLocationComponent {

  locationData:any;
  page = 1;
	pageSize = 4;
  customers:any;
  collectionSize=0;
  
  constructor(locationinfo:InsuranceService){
    locationinfo.getLocation().subscribe((data)=>{
      this. locationData=data
      console.log(this.locationData);
      // this.collectionSize=this.customerData.length;
    })
  }
}
