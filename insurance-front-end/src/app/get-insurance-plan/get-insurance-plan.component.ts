import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { Router } from '@angular/router';
import { TemporaryDataService } from '../service/temporary-data.service';

@Component({
  selector: 'app-get-insurance-plan',
  templateUrl: './get-insurance-plan.component.html',
  styleUrls: ['./get-insurance-plan.component.css']
})
export class GetInsurancePlanComponent {

  insuranceSchemeData:any;
  insurancePlanData:Array<any>;
  page: number = 1;
  totalRecords:number=0 
  constructor(private insuranceService:InsuranceService,private temporaryData:TemporaryDataService, private router: Router){
    this.insurancePlanData=new Array<any>()
    insuranceService.getInsurancePlan().subscribe({
      next:(data)=>{
      this.insurancePlanData=data
      this.totalRecords=data.length
      console.log(this.totalRecords)
      console.log(this.insurancePlanData)
      // this.findInsuranceTypeName(this.insuranceSchemeData.insuranceTypeId);
    },
    error:(errorResponse:HttpErrorResponse)=>{
      console.log(errorResponse)
    }
    })
  }
  pageSize:number=5;
  changePageSize(event:any){
    this.pageSize=event.target.value
    console.log(this.pageSize)
  }
  ngOnInit():void{
    // debugger
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
  setId(id:number){
    console.log(id)
    this.temporaryData.setId(id)
    this.router.navigateByUrl("/updateInsurancePlan")
  }
  deleteData(id:number){
    console.log(id)
    this.insuranceService.deleteInsurancePlan(id).subscribe({
      next:(response)=>{
        alert('data deleted')
        location.reload()
      }
    })
  }
  getInsuranceSchemeName(id:number){
    this.insuranceService.getInsuranceScheme().subscribe((data)=>{
      this.insuranceSchemeData=data
    })
    const insuranceSchemeName=this.insuranceSchemeData.find((x:any)=>x.id===id)
    return insuranceSchemeName ?`${insuranceSchemeName.insuranceSchemeName}`:`insuranceScheme Not Found`;
  
  }
// findInsuranceTypeName(id:number){
//   // debugger
//   this.insuranceService.getInsuranceTypeById(id).subscribe({
//     next:(data)=>{
//       this.insuranceTypeData=data
//       console.log(this.insuranceTypeData)
//     },
//     error:(errorResponse:HttpErrorResponse)=>{
//       console.log(errorResponse)
//     }
//   })
//}
}
