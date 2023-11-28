import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TemporaryDataService } from '../service/temporary-data.service';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-customer-component',
  templateUrl: './customer-component.component.html',
  styleUrls: ['./customer-component.component.css']
})
export class CustomerComponentComponent {

  userName:string=''
  token:string | null=null

  constructor(private router:Router,protected temporaryData:TemporaryDataService,private data:DataService){
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
