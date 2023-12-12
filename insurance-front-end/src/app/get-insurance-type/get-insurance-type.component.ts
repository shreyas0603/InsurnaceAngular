import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { TemporaryDataService } from '../service/temporary-data.service';

@Component({
  selector: 'app-get-insurance-type',
  templateUrl: './get-insurance-type.component.html',
  styleUrls: ['./get-insurance-type.component.css']
})
export class GetInsuranceTypeComponent {

  insuranceTypeData:Array<any>
  
  // numberOfRecords:number=5
  
  //as per video
  page: number = 1;
  totalRecords:number=0
  

  constructor(private insuranceService:InsuranceService, private router: Router,protected temporaryData:TemporaryDataService){
    this.insuranceTypeData=new Array<any>()
  }
  pageSize:number=5;
  changePageSize(event:any){
    this.pageSize=event.target.value
    console.log(this.pageSize)
  }
  getInsuranceData(){
    this.insuranceService.getInsuranceType().subscribe(
      {next:
      (data)=>{
      this.insuranceTypeData=data
      console.log(this.insuranceTypeData)
        this.totalRecords=data.length
        console.log(this.totalRecords)
      // debugger
    },
    error:(errorResponse:HttpErrorResponse)=>{
      console.log(errorResponse)
    }
  })
  }
  ngOnInit():void{
    // debugger
    this.getInsuranceData()
    var token=localStorage.getItem('token')
    
    var role = localStorage.getItem('role')
    if(token==null){
      alert('Please login')
      this.router.navigateByUrl('/login')
    }
    else if(role!='Admin'){
      alert('Please Login As Admin')
      this.router.navigateByUrl('/login')
    }
  }
  
  setInsurancePlanId(id:number){
    console.log(id)
    this.temporaryData.setId(id)
    this.router.navigateByUrl("/updateInsuranceType")
  }
  deleteInsuranceType(id:number){
    debugger
    console.log(id)
    this.insuranceService.deleteInsuranceType(id).subscribe({
      next:(response)=>{
        alert('data deleted')
        this.getInsuranceData()
      }
    })
  }
}
