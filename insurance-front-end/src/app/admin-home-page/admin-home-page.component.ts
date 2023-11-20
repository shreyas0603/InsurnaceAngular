import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.css']
})
export class AdminHomePageComponent {

  constructor(private router:Router){

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
