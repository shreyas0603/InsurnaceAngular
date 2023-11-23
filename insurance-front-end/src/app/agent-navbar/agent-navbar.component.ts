import { Component } from '@angular/core';
import { TemporaryDataService } from '../service/temporary-data.service';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-agent-navbar',
  templateUrl: './agent-navbar.component.html',
  styleUrls: ['./agent-navbar.component.css']
})
export class AgentNavbarComponent {

  userName:string=""
  constructor(private temporarydata:TemporaryDataService,private data:DataService){
    
  }
  deleteToken(){
    // localStorage.removeItem('token')
    localStorage.clear()
  }
  setRole(){
    console.log("hih")
    this.temporarydata.setRole('Agent')
    // console.log(this.temporarydata.getRole)
    
  }
}
