import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { TemporaryDataService } from '../service/temporary-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-employee',
  templateUrl: './get-employee.component.html',
  styleUrls: ['./get-employee.component.css']
})
export class GetEmployeeComponent {

  employeeData:any;
  page = 1;
	pageSize = 4;
  customers:any;
  collectionSize=0;
  
  constructor(private employeeinfo:InsuranceService,protected temporaryData:TemporaryDataService, private router: Router){
    employeeinfo.getEmployee().subscribe((data)=>{
      this. employeeData=data
      console.log(this.employeeData);
      // this.collectionSize=this.customerData.length;
    })
  }
  setId(id:number){
    console.log(id)
    this.temporaryData.setId(id)
    this.router.navigateByUrl("/updateEmployee")
  }
  deleteData(id:number){
    console.log(id)
    this.employeeinfo.deleteEmployee(id).subscribe({
      next:(response)=>{
        alert('data deleted')
      }
    })
  }
}
