import { BehaviorSubject, Observable, count } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

header:any={ token: localStorage.getItem('etoken')}
  constructor(private _HttpClient:HttpClient) { }
cartNumber:BehaviorSubject<number>=new BehaviorSubject(0)


  addToCart(id:string):Observable<any>
  {
   return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/cart',
   {productId:id},
 
)
  }

  displayCart():Observable<any>
  {
   return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/cart'
   ,
   )
  }
  removeItemCart(id:string):Observable<any>
  {
   return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
   
)
  }


  
updateCart(id:string,count:number):Observable<any>
  {
return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`
,{"count": count}
)
  }

  
payment(idCart:string,data:object):Observable<any>
{
return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${idCart}?url=http://localhost:4200`,
{
  shippingAddress:data
}
)}

allOrder(pagenum:number=1):Observable<any>
{
return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/orders/?page=${pagenum}`,)
}
 
}
