import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent {


  locationData:any
  addLocation = new FormGroup({
    state : new FormControl(''),
    city : new FormControl(''),
   
  })
  constructor(private insuranceservice:InsuranceService,private router:Router){

  }
  addNewLocation(data:any){
    this.insuranceservice.addLocation(data).subscribe({
      next:(result)=>{
        alert("Agent Added Successfully")
        console.log(result)
        this.router.navigateByUrl("/admin")
      },
      error:(errorResponse:HttpErrorResponse)=>{
        console.log(errorResponse)
      }
    })
  }
}
