import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private _HttpClient:HttpClient) { }
WishListNumber:BehaviorSubject<number>=new BehaviorSubject(0)

  sethome(pagenum:number=1):Observable<any>
  {
return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products?page=${pagenum}`)
  }


  subproduct(api:string):Observable<any>
  {
return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${api}`)
  }

  subCatig(api:string):Observable<any>
  {
return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/${api}`)
  }

  subbrand(api:string):Observable<any>
  {
return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/brands/${api}`)
  }

  setcategories():Observable<any>
  {
return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  }

  setbrands():Observable<any>
  {
return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  }

  addToWishList(id:string):Observable<any>
  {
   return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/wishlist',
   {productId:id},
 
)}

 displayWishList():Observable<any>
 {
return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/wishlist`)
 }

 removeFromWishlist(id:string):Observable<any>
 {
return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`)
 }
}
