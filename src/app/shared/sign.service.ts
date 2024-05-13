import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignService {

  constructor(private _HttpClient:HttpClient) { }
  
setRegister(api:object):Observable<any>
{
 return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,api)
}

setLogin(api:object):Observable<any>
{
 return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,api)
}

forgetpassword(userEmail:object):Observable<any>
{
return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,
userEmail
)
}

resetCode(resetCode:object):Observable<any>{
  return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,resetCode)
}
resetPass(newPasswordForm:object):Observable<any>{
  return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,newPasswordForm)
}


}
