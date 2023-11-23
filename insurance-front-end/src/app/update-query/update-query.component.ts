import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { TemporaryDataService } from '../service/temporary-data.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-query',
  templateUrl: './update-query.component.html',
  styleUrls: ['./update-query.component.css']
})
export class UpdateQueryComponent {
  
  queryForm=new FormGroup({
    id:new FormControl(''),
    queryTitle:new FormControl(''),
    queryMessage:new FormControl(''),
    queryDate:new FormControl(''),
    reply:new FormControl(''),
    customerId:new FormControl('')
  })

  QueryData:any
  QueryId:number=0

  constructor(private queryinfo:InsuranceService,private temporaryData: TemporaryDataService,private router:Router){
    temporaryData.getId.subscribe(id=>this.QueryId=id)
    //thi.id=temporaryData.getId()
    queryinfo.getQueryById(this.QueryId).subscribe({
      next:(result)=>{
        this.QueryData=result
      },
      error(errorResponse:HttpErrorResponse){
        console.log(errorResponse)
      }
    })
    console.log(this.QueryId)
    
  }
  updateQuery(data:any){
    // this.insuranceTypeForm.id=this.insuranceTypeId
    console.log(data)
    this.queryinfo.updateQuery(data).subscribe({
      next:(resopnse)=>{
        console.log(resopnse)
        alert("Insurance type Added");
        this.router.navigateByUrl("/admin")
      },
      error(errorResponse:HttpErrorResponse){
        console.log(errorResponse)
      }
      
    })
    console.log(data)
  }
}
