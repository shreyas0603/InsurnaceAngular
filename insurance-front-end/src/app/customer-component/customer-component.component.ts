import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TemporaryDataService } from '../service/temporary-data.service';
import { DataService } from '../service/data.service';
import { InsuranceService } from '../service/insurance.service';

@Component({
  selector: 'app-customer-component',
  templateUrl: './customer-component.component.html',
  styleUrls: ['./customer-component.component.css']
})
export class CustomerComponentComponent {

  userName:string=''
  token:string | null=null
  documentCount:number=0;
  insuranceAccountCount:number=0;
  queryCount:number=0;
  constructor(private insuranceService:InsuranceService,private router:Router,protected temporaryData:TemporaryDataService,private data:DataService){
    this.userName= data.userName
    insuranceService.getQuery().subscribe((data)=>{
      this.queryCount=data.length
    })
 
    insuranceService.getCustomerInsuranceAccount().subscribe((data)=>{
      this.insuranceAccountCount=data.length
    })
 
    insuranceService.getAllDocuments().subscribe((data)=>{
      this.documentCount=data.length
    })
  }
    ngOnInit():void{
      this.token=localStorage.getItem('token')
      if(this.token==null){
        alert('Please login')
        this.router.navigateByUrl('/login')
      }
    }
}
