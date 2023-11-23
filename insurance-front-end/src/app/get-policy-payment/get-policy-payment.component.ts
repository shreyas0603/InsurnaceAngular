import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { TemporaryDataService } from '../service/temporary-data.service';
import { Router } from '@angular/router';

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
  userRole:string=''
  constructor(private paymentinfo:InsuranceService,private temporaryData:TemporaryDataService,private router:Router){
    this.userRole=temporaryData.getRole()
    paymentinfo.getPolicyPayements().subscribe((data)=>{
      this. paymentData=data
      console.log(this. paymentData);
      // this.collectionSize=this.customerData.length;
    })
  }
  setId(id:number){
    console.log(id)
    this.temporaryData.setId(id)
    this.router.navigateByUrl("/updatePolicyPayment")
  }
  deleteData(id:number){
    console.log(id)
    this.paymentinfo.deletePolicyPayments(id).subscribe({
      next:(response)=>{
        alert('data deleted')
      }
    })
  }
}
