import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { TemporaryDataService } from '../service/temporary-data.service';

@Component({
  selector: 'app-get-insurance-scheme',
  templateUrl: './get-insurance-scheme.component.html',
  styleUrls: ['./get-insurance-scheme.component.css']
})
export class GetInsuranceSchemeComponent {

  insuranceSchemeData:any;
  insuranceTypeData:any;
  constructor(private insuranceService:InsuranceService, private router: Router,protected temporaryData:TemporaryDataService){
    
    insuranceService.getInsuranceScheme().subscribe({
      next:(data)=>{
      this.insuranceSchemeData=data
      console.log(this.insuranceSchemeData)
      // debugger
      
    },
    error:(errorResponse:HttpErrorResponse)=>{
      console.log(errorResponse)
    }
  })
  insuranceService.getInsuranceType().subscribe({
    next:(result)=>{
      this.insuranceTypeData=result
    },
    error(errorResponse:HttpErrorResponse){
      console.log(errorResponse)
    }
  })
}
// insuranceTypeName(id:number){
//   debugger
//   this.insuranceService.getInsuranceTypeById(id).subscribe({
//     next:(result)=>{
//       console.log(result)
//       this.insuranceTypeData=result
//       return this.insuranceTypeData[0].insuranceTypeName
//     }
//   })
// }
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
  this.router.navigateByUrl("/updateInsuranceScheme")
}
deleteData(id:number){
  console.log(id)
  this.insuranceService.deleteInsuranceScheme(id).subscribe({
    next:(response)=>{
      alert('data deleted')
    }
  })
}
// findInsuranceTypeName(id:number){
//   // debugger
//   console.log(id)
//   this.insuranceService.getInsuranceTypeById(id).subscribe({
//     next:(data)=>{
//       console.log(data)
//       this.insuranceTypeData=data
//       // console.log(this.insuranceTypeData)
//       // return this.insuranceTypeData.insuranceTypeName
//     },
//     error:(errorResponse:HttpErrorResponse)=>{
//       console.log(errorResponse)
//     }
//   })
// }
}
