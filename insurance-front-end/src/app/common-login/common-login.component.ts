import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { DataService } from '../service/data.service';
import { TemporaryDataService } from '../service/temporary-data.service';
//import { LoginService } from '../service/login.service';
//import { DataService } from '../service/data.service';

@Component({
  selector: 'app-common-login',
  templateUrl: './common-login.component.html',
  styleUrls: ['./common-login.component.css']
})
export class CommonLoginComponent {
  
  loginForm=new FormGroup({
    accountType:new FormControl(''),
    userName: new FormControl('',[Validators.required,]),
    password: new FormControl('',[Validators.required,])
  })

  myToken: any="";
  role:any;
  user:any;
  allAccountType=["Admin","Agent","Customer","Employee"];
  roleResponse:any;
  // loginCredential:any={
  //   id: 0,
  //   firstName: "string",
  //   lastName: "string",
  //   userName:"",
  //   password:"",
  //   // countAdmin: 0
  //  }
  
  constructor(private auth: LoginService,private router:Router,private data:DataService
    ,private temporaryData:TemporaryDataService) {
    
    
  }

  accountTypeResponse(loginformresponse:any){
    
    // this.loginCredential.userName=loginformresponse.userName
    // this.loginCredential.password=loginformresponse.password
    this.roleResponse=loginformresponse.accountType
    
  }

  loginUser(formData:any){
    
    this.accountTypeResponse(formData)
    
    if(this.roleResponse=="Admin"){
      
      this.auth.loginAdmin(formData).subscribe({
        next:(response)=>{
          // console.log(token);
          // this.myToken=token
          // localStorage.setItem("token",this.myToken.tokenValue)
          // this.router.navigateByUrl("/weather");
          
          //get Token Value from header
          this.myToken=response.headers.get('jwt')
          //convert from Json
          this.myToken=JSON.parse(this.myToken);
          console.log(this.myToken);
          //access object from response body
          // this.role=response.body;
          // console.log(this.role);
  
          
          //Store it in ls
          localStorage.setItem("token",this.myToken)
          localStorage.setItem("role",this.roleResponse)
          // this.router.navigateByUrl("/weather");
  
          //access object from resopnse body
          this.user=response.body
  
          //store user info in data service vars
          this.data.userId=this.user.userId
          this.data.userName=this.user.userName
          
          this.temporaryData.setLoginId(this.data.userId)
          
          console.log(this.roleResponse)
          
          this.router.navigateByUrl("/admin")
          
        },
        error:(errorResponse:HttpErrorResponse)=>{
          console.log(errorResponse);
          alert(errorResponse.error)
          
        }
      })
    }


    if(this.roleResponse=="Agent"){
      
      // debugger
      this.auth.loginAgent(formData).subscribe({
        next:(response)=>{
          // console.log(token);
          // this.myToken=token
          // localStorage.setItem("token",this.myToken.tokenValue)
          // this.router.navigateByUrl("/weather");
          
          //get Token Value from header
          this.myToken=response.headers.get('jwt')
          //convert from Json
          this.myToken=JSON.parse(this.myToken);
          console.log(this.myToken);
          //access object from response body
          // this.role=response.body;
          // console.log(this.role);
  
          
          //Store it in ls
          localStorage.setItem("token",this.myToken)
          localStorage.setItem("role",this.roleResponse)
          // this.router.navigateByUrl("/weather");
  
          //access object from resopnse body
          this.user=response.body
  
          //store user info in data service vars
          this.data.userId=this.user.userId
          this.data.userName=this.user.userName
  
          
          this.temporaryData.setLoginId(this.data.userId)
          this.temporaryData.setRole('Agent')
         
             this.router.navigateByUrl("/agent")
          
        },
        error:(errorResponse:HttpErrorResponse)=>{
          console.log(errorResponse);
          
        }
      })
    }


    if(this.roleResponse=="Customer"){

      this.auth.loginCustomer(formData).subscribe({
        next:(response)=>{
          // console.log(token);
          // this.myToken=token
          // localStorage.setItem("token",this.myToken.tokenValue)
          // this.router.navigateByUrl("/weather");
          
          //get Token Value from header
          this.myToken=response.headers.get('jwt')
          //convert from Json
          this.myToken=JSON.parse(this.myToken);
          console.log(this.myToken);
          //access object from response body
          // this.role=response.body;
          // console.log(this.role);
  
          
          //Store it in ls
          localStorage.setItem("token",this.myToken)
          localStorage.setItem("role",this.roleResponse)
          // this.router.navigateByUrl("/weather");
  
          //access object from resopnse body
          this.user=response.body
  
          //store user info in data service vars
          this.data.userId=this.user.userId
          console.log('userId : '+this.data.userId);
          
          this.data.userName=this.user.userName
  
          
          this.temporaryData.setLoginId(this.data.userId)
          this.temporaryData.setRole('Customer') 
             this.router.navigateByUrl("/customer")
          
        },
        error:(errorResponse:HttpErrorResponse)=>{
          console.log(errorResponse);
          
        }
      })
    }


    if(this.roleResponse=="Employee"){

      this.auth.loginEmployee(formData).subscribe({
        next:(response)=>{
          // console.log(token);
          // this.myToken=token
          // localStorage.setItem("token",this.myToken.tokenValue)
          // this.router.navigateByUrl("/weather");
          
          //get Token Value from header
          this.myToken=response.headers.get('jwt')
          //convert from Json
          this.myToken=JSON.parse(this.myToken);
          console.log(this.myToken);
          //access object from response body
          // this.role=response.body;
          // console.log(this.role);
  
          
          //Store it in ls
          localStorage.setItem("token",this.myToken)
          localStorage.setItem("role",this.roleResponse)
          this.temporaryData.setRole('Employee')
          // this.router.navigateByUrl("/weather");
  
          //access object from resopnse body
          this.user=response.body
  
          //store user info in data service vars
          this.data.userId=this.user.userId
          this.data.userName=this.user.userName
  
          
          this.temporaryData.setLoginId(this.data.userId)
          
             this.router.navigateByUrl("/employee")
          
        },
        error:(errorResponse:HttpErrorResponse)=>{
          console.log(errorResponse);
          
        }
      })
    }
  }
}
