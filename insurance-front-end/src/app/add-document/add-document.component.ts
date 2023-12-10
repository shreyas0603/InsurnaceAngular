import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { Router } from '@angular/router';
import { TemporaryDataService } from '../service/temporary-data.service';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.css']
})
export class AddDocumentComponent {

  documents: Document[] = [];
  documentDto: any = {
    documentType: '',
    documentName: '',
    customerId: this.data.userId,
    file: null
  };
 
  constructor(private insuranceservice: InsuranceService, private router: Router, private temporaryData: TemporaryDataService,private data:DataService)
   {
    alert(this.documentDto.customerId)
   }
 
  ngOnInit() {
    // Load documents if needed
  }
 
  onFileSelected(event: any) {
    // debugger
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.documentDto.file = file;
    }
  }
 
  uploadFile() {
    debugger
    if (this.documentDto.file) {
      const formData = new FormData();
      formData.append('documentType', this.documentDto.documentType);
      formData.append('documentName', this.documentDto.documentName);
      formData.append('customerId', this.documentDto.customerId.toString());
      formData.append('file', this.documentDto.file);
      console.log(formData)
      this.insuranceservice.addFiles(formData).subscribe({
        next:(result)=>{
          alert("Doc Added Successfully")
          console.log(result)
         
        },
        error:(errorResponse:HttpErrorResponse)=>{
          console.log(errorResponse)
        }
      })
 
 
       
    } else {
      console.warn('No file selected for upload');
      // Provide user feedback about selecting a file
    }
 
  }
}



  // handleFileInput(event:Event){
  //   // debugger
  //   let files=(event.target as HTMLInputElement).files
  //   if(files){
  //     for(let index=0;index< files.length;index++){
  //       if(files.item(index)){
  //         this.postFile(files.item(index) as File)

  //       }
  //     }
  //     alert("File Uploaded");
  //   }
  //   (event.target as HTMLInputElement).files=null;
  //   (event.target as HTMLInputElement).value="";

  // }

  // postFile(file:File){

  //   this.uploadFile.postFile(file).subscribe(()=>{

  //   })
  // }

