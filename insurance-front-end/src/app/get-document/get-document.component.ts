import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { TemporaryDataService } from '../service/temporary-data.service';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-get-document',
  templateUrl: './get-document.component.html',
  styleUrls: ['./get-document.component.css']
})
export class GetDocumentComponent {
  documentData:Array<any>
  constructor(private insuranceService:InsuranceService,protected temporaryData:TemporaryDataService, private router: Router, private data:DataService){
    debugger
    this.documentData=new Array<any>()
    insuranceService.getAllDocuments().subscribe((response)=>{
      this.documentData=response
    })
  }
  openDocument(id:number){
    this.temporaryData.documentId=id
    this.router.navigateByUrl('/openDocument')
  }
}
