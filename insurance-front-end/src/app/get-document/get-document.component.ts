import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { TemporaryDataService } from '../service/temporary-data.service';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-get-document',
  templateUrl: './get-document.component.html',
  styleUrls: ['./get-document.component.css']
})
export class GetDocumentComponent {
  documentData:Array<any>
  create:Array<any>;
  constructor(private insuranceService:InsuranceService,protected temporaryData:TemporaryDataService, private router: Router, private data:DataService){
    debugger
    this.documentData=new Array<any>()
    this.create= new Array<any>()
    this.getDocumentData()
  }
  getDocumentData(){
    this.insuranceService.getAllDocuments().subscribe((response)=>{
      this.documentData=response
    })
  }
  openDocument(id:number){
    this.temporaryData.documentId=id
    this.router.navigateByUrl('/openDocument')
  }
  createData(Id:number){
    // debugger
    this.insuranceService.getDocumentById(Id).subscribe((response)=>{
      //var c = response
      response.isApproved = true;
      this.create=response;
     
      this.updateDocumentVerification(this.create);
    })
  }
  updateDocumentVerification(data:any){
   
    // this.insuranceTypeForm.id=this.insuranceTypeId
   
    console.log(data)
    debugger
    this.insuranceService.updateDocument(data).subscribe({
     
      next:(resopnse:any)=>{
        console.log(resopnse)
        // location.reload();
        this.getDocumentData()
        // alert("Policy Claim Added");
        // this.router.navigateByUrl("/admin")
      },
      error(errorResponse:HttpErrorResponse){
        console.log(errorResponse)
      }
     
    })
    console.log(data)
  }
}
