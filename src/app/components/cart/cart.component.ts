import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Pipe } from '@angular/core';
import { count } from 'rxjs';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent{
constructor(private _CartService:CartService){}
cartDetails:any={};

updateCart(id:string , count:number){
  if(count>0){
    this._CartService.updateCart(id,count).subscribe({
      next:(res)=>{
        this.cartDetails=res.data;
  console.log(res);
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
            }
    })
  }
 
}


removeItem(id:string){
  this._CartService.removeItemCart(id).subscribe({
    next:(res)=>{
      this.cartDetails=res.data;
      console.log(res.data);
      this._CartService.cartNumber.next(res.numOfCartItems)
    },
    error:(err:HttpErrorResponse)=>{
      console.log(err);
    }
  })
}

  ngOnInit(): void {
    this._CartService.displayCart().subscribe({
      next:(res)=>{
        this.cartDetails=res.data;
        console.log(res.data);
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
      }
    })
  }

}
