import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { TemporaryDataService } from '../service/temporary-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-commision',
  templateUrl: './get-commision.component.html',
  styleUrls: ['./get-commision.component.css']
})
export class GetCommisionComponent {

  commisionData:any;
  page = 1;
	pageSize = 4;
  customers:any;
  collectionSize=0;
  total:number=0;
  userRole:string=''
  constructor(private commisioninfo:InsuranceService,private temporaryData:TemporaryDataService, private router: Router){
    this.userRole=temporaryData.getRole()
    commisioninfo.getCommision().subscribe((data)=>{
      this. commisionData=data
      console.log(this. commisionData);
      // this.collectionSize=this.customerData.length;
    })
  }
  setId(id:number){
    console.log(id)
    this.temporaryData.setId(id)
    this.router.navigateByUrl("/updateCommision")
  }
  deleteData(id:number){
    console.log(id)
    this.commisioninfo.deleteCommision(id).subscribe({
      next:(response)=>{
        alert('data deleted')
      }
    })
  }
  calculateTotal() {
    // if (!this.commisionData) {
    //   return 0;
    // }
  
   for (var commision of this.commisionData){
    this.total=this.total+commision.commisionAmount
   }
   return this.total
  }

  makeTotalZero(){
    this.total=0;
  }
}
