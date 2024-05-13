import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignService } from 'src/app/shared/sign.service';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.css']
})
export class ForgetpassComponent {
constructor(private _SignService:SignService,private _Router:Router){}
  email:string=''
step1:boolean=true
step2:boolean=false;
step3:boolean=false;
msErr:string='';
forgetForm:FormGroup=new FormGroup({
  email:new FormControl('',[Validators.required,Validators.email])
})
resetCodeForm:FormGroup=new FormGroup({
  resetCode:new FormControl('')
})
newPasswordForm:FormGroup=new FormGroup({
  newPassword:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/)])
})


forgetpass():void{
  let userPass=this.forgetForm.value
 this.email= userPass.email;
 console.log(this.email);
 
  
  this._SignService.forgetpassword(userPass).subscribe({
      next:(res)=>{
console.log(res);
this.msErr=res.message
this.step1=false
this.step2=true
      },
      error:(err:HttpErrorResponse)=>{
this.msErr=err.error.message
        
              }
  })
}
resetCode():void{
  let code=this.resetCodeForm.value
  console.log(code);
  
  this._SignService.resetCode(code).subscribe({
    next:(res)=>{
console.log(res);
this.msErr=res.status
this.step2=false
this.step3=true

    },
    error:(err:HttpErrorResponse)=>{
      this.msErr=err.error.message
              
                    }
})
}
newpass():void{
  let newpass=this.newPasswordForm.value
  newpass.email=this.email
  this._SignService.resetPass(newpass).subscribe({
    next:(res)=>{
console.log(res);
if(res.token){
// localStorage.setItem('_token',res.token)
this._Router.navigate(['/login'])
}
this.msErr=res.status
    },
    error:(err:HttpErrorResponse)=>{
      this.msErr=err.error.message
              
      }
})
}
}