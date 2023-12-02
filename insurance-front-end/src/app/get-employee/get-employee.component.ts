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

  employeeData:Array<any>;
  page: number = 1;
  totalRecords:number=0 
  customers:any;
  collectionSize=0;
  
  constructor(private employeeinfo:InsuranceService,protected temporaryData:TemporaryDataService, private router: Router){
    this.employeeData=new Array<any>()
    employeeinfo.getEmployee().subscribe((data)=>{
      this. employeeData=data
      this.totalRecords=data.length
      console.log(this.totalRecords)
      console.log(this.employeeData);
      // this.collectionSize=this.customerData.length;
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
    this.router.navigateByUrl("/updateEmployee")
  }
  deleteData(id:number){
    console.log(id)
    this.employeeinfo.deleteEmployee(id).subscribe({
      next:(response)=>{
        alert('data deleted')
        location.reload()
      }
    })
  }
}
