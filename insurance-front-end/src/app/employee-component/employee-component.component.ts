import { Component } from '@angular/core';
import { TemporaryDataService } from '../service/temporary-data.service';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { HttpClient } from '@angular/common/http';
import { InsuranceService } from '../service/insurance.service';

@Component({
  selector: 'app-employee-component',
  templateUrl: './employee-component.component.html',
  styleUrls: ['./employee-component.component.css']
})
export class EmployeeComponentComponent {

  userName:string=''
  token:string | null=null
   agentCount:number=0
   employeeCount:number=0
   customerCount:number=0
   insuranceTypeCount:number=0
   insurancePlanCount:number=0
   policyClaimCount:number=0
   policyPaymentCount:number=0
   insuranceSchemeCount:number=0
   locationCount:number=0
   documentCount:number=0
   documentVerificationCount:number=0
  constructor(protected temporaryData:TemporaryDataService,private router:Router, private data:DataService, private http: HttpClient, private insuranceservice: InsuranceService){
    this.userName= data.userName
    debugger
    insuranceservice.getAgent().subscribe((data)=>{
      this.agentCount=data.length
      console.log(this.agentCount)
    })
    insuranceservice.getInsurancePlan().subscribe((data)=>{
      //this.insurancePlanCount=data.length
      console.log(this.insurancePlanCount)
  })
  insuranceservice.getInsuranceType().subscribe((data)=>{
    //this.insuranceTypeCount=data.length
    console.log(this.insuranceTypeCount)
  })
  insuranceservice.getInsuranceScheme().subscribe((data)=>{
    //this.insuranceSchemeCount=data.length
    console.log(this.insuranceSchemeCount)
  })
  insuranceservice.getPolicyClaim().subscribe((data)=>{
    this.policyClaimCount=data.length
    console.log(this.policyClaimCount)
  })
  insuranceservice.getAllDocuments().subscribe((data)=>{
    this.documentCount=data.length
  })
  // insuranceservice.getDocumentVerification().subscribe((data)=>{
  //   //this.documentVerificationCount=data.length
  //   console.log(this.documentVerificationCount)
  // }) commented

}

  ngOnInit():void{
    this.token=localStorage.getItem('token')
    if(this.token==null){
      alert('Please login')
      this.router.navigateByUrl('/login')
    }
  }
  // @ViewChild('fileInput') fileInput!: ElementRef;
  // selectedFile: any;
  // verificationMessage: string = "";

  // onFileSelected(event: any): void {
  //   this.selectedFile = event.target.files[0];
  // }
  // downloadDocument(): void {
  //   const downloadLink = document.createElement('a');
  //   const url = URL.createObjectURL(this.selectedFile);
  //   downloadLink.href = url;
  //   downloadLink.download = this.selectedFile.name;
  //   document.body.appendChild(downloadLink);
  //   downloadLink.click();
  //   document.body.removeChild(downloadLink);
  // }

  // verifyDocument(): void {
  //   if (this.selectedFile) {
  //     // Implement your document verification logic here
  //     // For simplicity, let's assume the document is always verified
  //     this.verificationMessage = 'Document is verified!';
  //   } else {
  //     this.verificationMessage = 'Please select a document to verify.';
  //   }
  // }
  name:string = ""
  file: any;
  getName(name:string){
   this.name = name;
  }
  getFile(event:any){
  this.file = event.target.files[0];
  console.log("file", this.file)
  }
// submitData(){
//   //create formData object
//   let formData = new FormData();
//   formData.set("name", this.name)
//   formData.set("file", this.file)

//   //submit this data in API
//   this.http.post('https://localhost:7114/api/PolicyClaim/file', formData)
//   .subscribe((response) => {});
//  }
}
