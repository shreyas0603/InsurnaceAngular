import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';

@Component({
  selector: 'app-get-policy-payment',
  templateUrl: './get-policy-payment.component.html',
  styleUrls: ['./get-policy-payment.component.css']
})
export class GetPolicyPaymentComponent {

  paymentData:any;
  page = 1;
	pageSize = 4;
  customers:any;
  collectionSize=0;
  
  constructor(paymentinfo:InsuranceService){
    paymentinfo.getPolicyPayements().subscribe((data)=>{
      this. paymentData=data
      console.log(this. paymentData);
      // this.collectionSize=this.customerData.length;
    })
  }
}
