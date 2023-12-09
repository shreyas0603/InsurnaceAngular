import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { TemporaryDataService } from '../service/temporary-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-insurance-plan',
  templateUrl: './customer-insurance-plan.component.html',
  styleUrls: ['./customer-insurance-plan.component.css']
})
export class CustomerInsurancePlanComponent {

  // insuranceTypeData:Array<any>
  // insuranceSchemeData:Array<any>
  // insurancePlanData:Array<any>
  // insuranceTypeId:number=0
  // insuranceName:string=''
  // constructor(private insuranceService:InsuranceService,private temporaryData:TemporaryDataService){
  //   this.insuranceTypeData=new Array<any>()
  //   this.insuranceSchemeData=new Array<any>()
  //   this.insurancePlanData=new Array<any>()
  //   this.insuranceTypeId=temporaryData.insuranceTypeId
  //   insuranceService.getInsuranceTypeById(this.insuranceTypeId).subscribe((data)=>{
  //     this.insuranceTypeData=data
  //     console.log(this.insuranceTypeData)
  //     this.insuranceName=data.insuranceTypeName
  //     console.log(this.insuranceName)
  //   })
  //   // insuranceService.getInsuranceScheme().subscribe((data)=>{
  //   //   this.insuranceSchemeData=data
  //   //   this.insuranceSchemeData=this.insuranceSchemeData.filter(x=>x.insuranceTypeId===this.insuranceTypeId)
  //   // })
  //   // insuranceService.getInsurancePlan().subscribe((data)=>{
  //   //   this.insurancePlanData=data
  //   // })
  // }
  // filterInsurancePlan(schemeId:number){
  //   this.insurancePlanData=this.insurancePlanData.filter(x=>x.insuranceSchemeId===schemeId)

  // }

  insuranceTypeData:Array<any>
  insuranceSchemeData:Array<any>
  insurancePlanData:Array<any>
  insuranceTypeId:number=0
  insuranceName:string=''
  constructor(private insuranceService:InsuranceService,private temporaryData:TemporaryDataService,private router:Router){
    this.insuranceTypeData=new Array<any>()
    this.insuranceSchemeData=new Array<any>()
    this.insurancePlanData=new Array<any>()
    this.insuranceTypeId=temporaryData.insuranceTypeId
    insuranceService.getInsuranceTypeById(this.insuranceTypeId).subscribe((data)=>{
      
      this.insuranceTypeData=data
      console.log(this.insuranceTypeData)
      this.insuranceName=data.insuranceTypeName
      console.log(this.insuranceName)
    })
    insuranceService.getInsuranceScheme().subscribe((data)=>{
      this.insuranceSchemeData=data
      this.insuranceSchemeData=this.insuranceSchemeData.filter(x=>x.insuranceTypeId===this.insuranceTypeId)
      console.log(this.insuranceSchemeData);
      
    })
    insuranceService.getInsurancePlan().subscribe((data)=>{
      this.insurancePlanData=data
    })
  }
  filterInsurancePlan(schemeId:number){
    this.insurancePlanData=this.insurancePlanData.filter(x=>x.insuranceSchemeId===schemeId)

  }

  setInsuranceSchemeId(id:number){
  // debugger
    console.log(id);
    this.temporaryData.insurnaceSchemeId=id
    this.router.navigateByUrl('/customerInsuranceScheme')
  
  }
}
