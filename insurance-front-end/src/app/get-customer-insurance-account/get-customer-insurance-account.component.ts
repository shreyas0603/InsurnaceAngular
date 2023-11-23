import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { TemporaryDataService } from '../service/temporary-data.service';
import { Router } from '@angular/router';

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
  userRole:string=''
  constructor(private accountinfo:InsuranceService,private temporaryData:TemporaryDataService, private router: Router){
    this.userRole=temporaryData.getRole()
    accountinfo.getCustomerInsuranceAccount().subscribe((data)=>{
      this. accountData=data
      console.log(this. accountData);
      // this.collectionSize=this.customerData.length;
    })
  }
  setId(id:number){
    console.log(id)
    this.temporaryData.setId(id)
    this.router.navigateByUrl("/updateCustomerInsuranceAccount")
  }
  deleteData(id:number){
    console.log(id)
    this.accountinfo.deleteCustomerInsuranceAccount(id).subscribe({
      next:(response)=>{
        alert('data deleted')
      }
    })
  }
}
