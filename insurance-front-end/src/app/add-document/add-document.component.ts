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

  addFile = new FormGroup({
    id:new FormControl(0),
    documentType: new FormControl(''),
    file: new FormControl(''),
    documentName: new FormControl(''),
    customerId: new FormControl(''),

  })
   customerId:number=0;
   storeFile:any
  constructor(private insuranceservice: InsuranceService, private router: Router, private temporaryData: TemporaryDataService,private data:DataService) {
    this.customerId=data.userId
    console.log(this.customerId)
  }

  onFileSelected(event: any) {
    debugger
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.storeFile = file;
    }
  }
  addFiles(data:any){
    debugger
    console.log(data)
    data.file=this.storeFile
    
    this.insuranceservice.addFiles(data).subscribe({
      next:(result)=>{
        alert("files Added Successfully")
        console.log(result)
        // this.router.navigateByUrl("/customer")
      },
      error:(errorResponse:HttpErrorResponse)=>{
        console.log(errorResponse)
      }
    })
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

