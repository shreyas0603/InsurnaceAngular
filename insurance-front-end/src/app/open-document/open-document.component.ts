import { InsuranceService } from '../service/insurance.service';
import { TemporaryDataService } from '../service/temporary-data.service';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-open-document',
  templateUrl: './open-document.component.html',
  styleUrls: ['./open-document.component.css']
})
export class OpenDocumentComponent {

  documentId:number=0
  documentData:Array<any>
  documentUrl: SafeResourceUrl | undefined;
  documentFile:any
  constructor(private insuranceService:InsuranceService,protected temporaryData:TemporaryDataService, private router: Router, private data:DataService,
    private sanitizer: DomSanitizer,
      private route: ActivatedRoute){
    this.documentId=temporaryData.documentId
    this.documentData=new Array<any>()
    insuranceService.getDocumentById(this.documentId).subscribe((response)=>{
      // debugger
      this.documentData=response
      this.documentFile=response.viewDocument
      this.loadDocument()
    })
    
  }
    loadDocument(): void {
      if (this.documentData 
        // && this.documentData.viewDocument
        ) {
        const byteArray = this.base64ToArrayBuffer(this.documentFile.toString());
        const blob = new Blob([byteArray], { type: 'application/pdf' });
        this.documentUrl = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(blob));
      }
    }
 
    private base64ToArrayBuffer(base64: string): Uint8Array {
      // console.log('base64')
      // console.log(base64)
      const binaryString = window.atob(base64); //converts base64 string to binary string
      // console.log('binaryString')
      // console.log(binaryString)
      const length = binaryString.length;
      // console.log('length'+length)
      const bytes = new Uint8Array(length);
      // console.log('bytes before')
      // console.log(bytes)
      for (let i = 0; i < length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      // console.log('bytes After')
      // console.log(bytes)
      return bytes;
    }
  
}
