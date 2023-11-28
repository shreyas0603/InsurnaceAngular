import { Component } from '@angular/core';
import { TemporaryDataService } from '../service/temporary-data.service';

@Component({
  selector: 'app-customer-navbar',
  templateUrl: './customer-navbar.component.html',
  styleUrls: ['./customer-navbar.component.css']
})
export class CustomerNavbarComponent {

  constructor(private temporarydata:TemporaryDataService){}

  deleteToken(){
    // localStorage.removeItem('token')
    localStorage.clear()
  }

  setRole(){
    console.log("hih")
    this.temporarydata.setRole('Customer')  
    // console.log(this.temporarydata.getRole)
    
  }
}
