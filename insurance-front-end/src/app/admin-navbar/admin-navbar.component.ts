import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TemporaryDataService } from '../service/temporary-data.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent {

  constructor(private router:Router,private temporarydata:TemporaryDataService){
    
    
  }
    deleteToken(){
    // localStorage.removeItem('token')
    localStorage.clear()
  }
  setRole(){
    console.log("hih")
    this.temporarydata.setRole('Admin')
    // console.log(this.temporarydata.getRole)
    
  }
  AddInsuranceType(){
    this.router.navigateByUrl("/addInsuranceType")
  }
}
