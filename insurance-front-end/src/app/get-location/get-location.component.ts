import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { TemporaryDataService } from '../service/temporary-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-location',
  templateUrl: './get-location.component.html',
  styleUrls: ['./get-location.component.css']
})
export class GetLocationComponent {

  locationData:Array<any>;
  page: number = 1;
  totalRecords:number=0
  
  constructor(private locationinfo:InsuranceService,protected temporaryData:TemporaryDataService,private router:Router){
    this.locationData=new Array<any>()
    this.getLocation()
  }
  getLocation(){
    this.locationinfo.getLocation().subscribe((data)=>{
      this. locationData=data
      this.totalRecords=data.length
      console.log(this.locationData);
      // this.collectionSize=this.customerData.length;
    })
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
    this.router.navigateByUrl("/updateLocation")
  }
  deleteData(id:number){
    console.log(id)
    this.locationinfo.deleteLocation(id).subscribe({
      next:(response)=>{
        alert('data deleted')
        this.getLocation()
      }
    })
  }
}
