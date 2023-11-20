import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';

@Component({
  selector: 'app-get-customer-insurance-account',
  templateUrl: './get-customer-insurance-account.component.html',
  styleUrls: ['./get-customer-insurance-account.component.css']
})
export class GetCustomerInsuranceAccountComponent {

  accountData:any;
  page = 1;
	pageSize = 4;
  customers:any;
  collectionSize=0;
  
  constructor(accountinfo:InsuranceService){
    accountinfo.getCustomerInsuranceAccount().subscribe((data)=>{
      this. accountData=data
      console.log(this. accountData);
      // this.collectionSize=this.customerData.length;
    })
  }
}
