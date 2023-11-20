import { Component } from '@angular/core';
// import { MatPaginatorModule, PageEvent } from '@angular/material/paginator'; 
// import {MatTableDataSource} from '@angular/material/table';
import { InsuranceService } from '../service/insurance.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-get-agent-customer',
  templateUrl: './get-agent-customer.component.html',
  styleUrls: ['./get-agent-customer.component.css']
})
export class GetAgentCustomerComponent {

  customerData:any;
  page = 1;
	pageSize = 4;
  customers:any;
  collectionSize=0;
  insurnaceService:InsuranceService;
  headers:any;
  paginator: any={
    length:0,
    pageIndex:0
  }
  currentPage=1
  dataSource:any
  removeCustomer:any
  
  
  constructor(customerinfo:InsuranceService){
    this.insurnaceService=customerinfo
    customerinfo.getCustomer().subscribe((data)=>{
      this.customerData=data
      console.log(this.customerData);
      // this.collectionSize=this.customerData.length;
    })
    // this.refreshCountries();
  }

  // showBankData (pageNumber: number, pageSize: number) {
  //   console.log("hi data");
  //   this.insurnaceService.customers(pageNumber, pageSize).subscribe({
  //   next: (response) => {
  //   this.headers = response.headers.get('X-Pagination');
  //   this.customerData= response.body;
  //   this.headers = JSON.parse(this.headers);
  //   this.paginator.length = this.headers. TotalCount;
  //   this.paginator.pageIndex = this.currentPage;
  //   this.dataSource = new MatTableDataSource(this.customerData);
  //   },
  //   error: (errorResponse: HttpErrorResponse) => {
  //     console.log(errorResponse);
  //     }
  //   });
  //   this.removeCustomer = this.insurnaceService;
  // }
  //   pageChanged (event: PageEvent) {
  //     this.pageSize = event.pageSize;
  //     this.currentPage = event.pageIndex;
  //     this.showBankData(this.currentPage + 1, this.pageSize);

  //   }
}
