import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InsuranceService } from '../service/insurance.service';
import { TemporaryDataService } from '../service/temporary-data.service';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.css']
})
export class AdminHomePageComponent {

  userName:string=''

  constructor(private router:Router,protected temporaryData:TemporaryDataService,private data:DataService){
    this.userName= data.userName
  }

  addAgentUrl(){
    this.router.navigateByUrl('/AddAgent')
  }
  updateAgentUrl(){
    this.router.navigateByUrl('/update')
  }
  deleteDeleteUrl(){
    this.router.navigateByUrl('/delete')
  }
}
