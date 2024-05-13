
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlOptions, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignService } from 'src/app/shared/sign.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
constructor(private _FormBuilder:FormBuilder,private _SignService:SignService,private _Router:Router){}
  msErr:string='';
registerForm:FormGroup=this._FormBuilder.group({
  name:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
  email:['',[Validators.required,Validators.email]],
  password:['',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/)]],
  rePassword:[''],
  phone:['',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]]
},{validators:[this.confirm]} as FormControlOptions);

confirm(group:FormGroup):void{
  let password=group.get('password')
  let rePassword=group.get('rePassword')
  if(rePassword?.value==''||rePassword?.value==null){
    rePassword?.setErrors({required:true})
  }
 else if(password?.value!=rePassword?.value){
rePassword?.setErrors({pattern:true})
  }
}

handleForm(){
  if(this.registerForm.valid){

    this._SignService.setRegister(this.registerForm.value).subscribe({
      next:(res)=>{
  console.log(res);
  if(res.message=='success'){
    this._Router.navigate(['/login'])
  }
  
      },
      error:(err:HttpErrorResponse)=>{
  console.log(err);
  this.msErr=err.error.message;
      }
    })
  }
  else{
    this.registerForm.markAllAsTouched();
  }
  }
  
}

