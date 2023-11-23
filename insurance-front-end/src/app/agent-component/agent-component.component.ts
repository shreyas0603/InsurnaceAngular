import { Component } from '@angular/core';
import { TemporaryDataService } from '../service/temporary-data.service';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-agent-component',
  templateUrl: './agent-component.component.html',
  styleUrls: ['./agent-component.component.css'],
 
})
export class AgentComponentComponent {
  userName:string=''
  constructor(protected temporaryData:TemporaryDataService, private data:DataService){
    this.userName= data.userName
  }
}
