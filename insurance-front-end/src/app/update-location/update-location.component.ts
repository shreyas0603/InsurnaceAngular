import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { TemporaryDataService } from '../service/temporary-data.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-location',
  templateUrl: './update-location.component.html',
  styleUrls: ['./update-location.component.css']
})
export class UpdateLocationComponent {

  locationForm=new FormGroup({
    id:new FormControl(''),
    state:new FormControl(''),
    city:new FormControl(''),
   
  })

  locationData:any
  locationId:number=0

  constructor(private locationinfo:InsuranceService,private temporaryData: TemporaryDataService,private router:Router){
    temporaryData.getId.subscribe(id=>this.locationId=id)
    //thi.id=temporaryData.getId()
    locationinfo.getLocationById(this.locationId).subscribe({
      next:(result)=>{
        this.locationData=result
      },
      error(errorResponse:HttpErrorResponse){
        console.log(errorResponse)
      }
    })
    console.log(this.locationId)
    
  }
  updateLocation(data:any){
    // this.insuranceTypeForm.id=this.insuranceTypeId
    console.log(data)
    this.locationinfo.updateLocation(data).subscribe({
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
