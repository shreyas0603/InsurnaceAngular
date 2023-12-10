import { Component } from '@angular/core';
import { TemporaryDataService } from '../service/temporary-data.service';
import { DataService } from '../service/data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-navbar',
  templateUrl: './employee-navbar.component.html',
  styleUrls: ['./employee-navbar.component.css']
})
export class EmployeeNavbarComponent {

  userName:string=""
  constructor(private temporarydata:TemporaryDataService,private data:DataService,private http: HttpClient){
    
  }
  deleteToken(){
    // localStorage.removeItem('token')
    localStorage.clear()
  }
  setRole(){
    console.log("hih")
    this.temporarydata.setRole('Employee')
    // console.log(this.temporarydata.getRole)
    
  }
  selectedFile: File | null = null;
  verificationResult: string | null = null;

 

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  verifyDocument(): void {
    if (!this.selectedFile) {
      console.error('No file selected.');
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.http.post<any>('/verifyDocument', formData).subscribe(
      (response:any) => {
        this.verificationResult = response.result;
      },
      (error:any) => {
        console.error('Error verifying document:', error);
      }
    );
  }

}
