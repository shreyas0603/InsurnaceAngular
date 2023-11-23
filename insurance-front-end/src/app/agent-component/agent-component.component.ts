import { Component } from '@angular/core';
import { TemporaryDataService } from '../service/temporary-data.service';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agent-component',
  templateUrl: './agent-component.component.html',
  styleUrls: ['./agent-component.component.css'],
 
})
export class AgentComponentComponent {
  userName:string=''
  token:string | null=null
  constructor(protected temporaryData:TemporaryDataService,private router:Router, private data:DataService){
    this.userName= data.userName
  }
  ngOnInit():void{
    this.token=localStorage.getItem('token')
    if(this.token==null){
      alert('Please login')
      this.router.navigateByUrl('/login')
    }
  }
}
