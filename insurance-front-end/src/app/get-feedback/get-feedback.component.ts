import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { TemporaryDataService } from '../service/temporary-data.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

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
  customerData:any
  constructor(private queryinfo:InsuranceService,private temporaryData:TemporaryDataService, private router: Router){
    queryinfo.getQuery().subscribe((data)=>{
      this. queryData=data
      console.log(this.queryData);
      // this.collectionSize=this.customerData.length;
    })
    queryinfo.getCustomer().subscribe({
      next:(response)=>{
        this.customerData=response
      },
      error(errorResponse:HttpErrorResponse){
        console.log(errorResponse)
      }
    })
  }
  ngOnInit():void{
    // debugger
    var token=localStorage.getItem('token')
    
    var role = localStorage.getItem('role')
    if(token==null){
      alert('Please login')
      this.router.navigateByUrl('/login')
    }
    else if(role!='Admin' && role!='Customer'){
      alert('Please Login As Admin')
      this.router.navigateByUrl('/login')
    }
  }
  setId(id:number){
    console.log(id)
    this.temporaryData.setId(id)
    this.router.navigateByUrl("/updateQuery")
  }
  
}
