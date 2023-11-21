import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';

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
  
  constructor(employeeinfo:InsuranceService){
    employeeinfo.getEmployee().subscribe((data)=>{
      this. employeeData=data
      console.log(this.employeeData);
      // this.collectionSize=this.customerData.length;
    })
  }
}
