import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/shared/main.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit{
constructor(private _MainService:MainService){}
wishLIstDetails:any={};

  ngOnInit(): void {
    this._MainService.displayWishList().subscribe({
      next:(res)=>{
        console.log(res);
        this.wishLIstDetails=res.data
    this._MainService.WishListNumber.next(res.count)

            },
            error:(err:HttpErrorResponse)=>{
        console.log(err);
        
            }
    })
  }

  removeItem(id:string){
this._MainService.removeFromWishlist(id).subscribe({
  next:(res)=>{
    this.wishLIstDetails=res.data
    console.log(res);
    this._MainService.WishListNumber.next(res.count)

        },
        error:(err:HttpErrorResponse)=>{
    console.log(err);
    
        }
})
  }
}
