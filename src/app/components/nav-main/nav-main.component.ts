import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/cart.service';
import { MainService } from 'src/app/shared/main.service';

@Component({
  selector: 'app-nav-main',
  templateUrl: './nav-main.component.html',
  styleUrls: ['./nav-main.component.css']
})
export class NavMainComponent implements OnInit{
data:number=0
WishList:number=0
  constructor(private _Router:Router,private _CartService:CartService,private _MainService:MainService ){}
  ngOnInit(): void {
    this._CartService.cartNumber.subscribe({
      next:(res)=>{
        this.data=res
      }

    })
    this._CartService.displayCart().subscribe({
      next:(res)=>{
this.data=res.numOfCartItems

      }
    })

    this._MainService.WishListNumber.subscribe({
      next:(res)=>{
        this.WishList=res
      }

    })
this._MainService.displayWishList().subscribe({
      next:(res)=>{
this.WishList=res.count

      }
    })
    
  }








  out(){
    localStorage.removeItem('etoken')
    this._Router.navigate(['/login'])
  }
}
