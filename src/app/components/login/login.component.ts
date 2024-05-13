
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignService } from 'src/app/shared/sign.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _FormBuilder:FormBuilder,private _SignService:SignService,private _Router:Router){}
  msErr:string='';
loginForm:FormGroup=this._FormBuilder.group({
  email:[null,[Validators.required,Validators.email]],
  password:[null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/)]],
 
});



handleForm(){
  if(this.loginForm.valid){

    this._SignService.setLogin(this.loginForm.value).subscribe({
      next:(res)=>{
  console.log(res);
  if(res.message=='success'){
    localStorage.setItem('etoken',res.token)
    this._Router.navigate(['/home'])
  }
  
      },
      error:(err:HttpErrorResponse)=>{
  console.log(err);
  this.msErr=err.error.message;
      }
    })
  }
  else{
    this.loginForm.markAllAsTouched();
  }
  }
  
}
