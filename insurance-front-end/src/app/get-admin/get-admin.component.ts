import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { Router } from '@angular/router';
import { TemporaryDataService } from '../service/temporary-data.service';

@Component({
  selector: 'app-get-admin',
  templateUrl: './get-admin.component.html',
  styleUrls: ['./get-admin.component.css']
})
export class GetAdminComponent {

  studentData:any;
  constructor(private studentInfo:InsuranceService,private temporaryData:TemporaryDataService, private router: Router){
    studentInfo.getAdmins().subscribe({
      next:(data)=>{
      this.studentData=data
      console.log(this.studentData)
    },
    error:(errorResponse:HttpErrorResponse)=>{
      console.log(errorResponse)
    }
  })
  }
  setId(id:number){
    console.log(id)
    this.temporaryData.setId(id)
    this.router.navigateByUrl("/updateCustomer")
  }
  deleteData(id:number){
    console.log(id)
    this.studentInfo.deleteCustomer(id).subscribe({
      next:(response)=>{
        alert('data deleted')
      }
    })
  }
}
