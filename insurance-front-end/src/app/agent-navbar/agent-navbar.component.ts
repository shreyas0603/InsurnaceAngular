import { Component } from '@angular/core';
import { TemporaryDataService } from '../service/temporary-data.service';

@Component({
  selector: 'app-agent-navbar',
  templateUrl: './agent-navbar.component.html',
  styleUrls: ['./agent-navbar.component.css']
})
export class AgentNavbarComponent {

  constructor(private temporarydata:TemporaryDataService){
    
    temporarydata.setRole('Agent')
  }
}
