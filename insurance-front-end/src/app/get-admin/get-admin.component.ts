import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-admin',
  templateUrl: './get-admin.component.html',
  styleUrls: ['./get-admin.component.css']
})
export class GetAdminComponent {

  studentData:any;
  constructor(private studentInfo:InsuranceService, private router: Router){
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
}
