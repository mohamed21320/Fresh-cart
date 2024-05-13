import { count } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/shared/main.service';
import {products} from './../../shared/main';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/shared/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  products:any[]=[];
  Category:any[]=[];
textSearch:string='';
pageSize:number=0
  total:number=0
  currentPage:number=1
constructor(private _MainService:MainService,private _CartService:CartService, private _ToastrService:ToastrService){}
 
addCart(id:string){
  this._CartService.addToCart(id).subscribe({
    next:(res)=>{
      this._ToastrService.success(res.message,'Fresh Cart')
      this._CartService.cartNumber.next(res.numOfCartItems)
      
console.log(res);
    },
    error:(err:HttpErrorResponse)=>{
console.log(err);

    }
  })
}



  ngOnInit(): void {
    this._MainService.sethome().subscribe({
      next:(res)=>{
        console.log(res);
 this.products= res.data;
this.currentPage=res.metadata.currentPage
this.total=res.results
this.pageSize=res.metadata.limit

      },
      error:(err:HttpErrorResponse)=>{
console.log(err);

      }

    })


    this._MainService.setcategories().subscribe({
      next:(res)=>{
        console.log(res.data);
 this.Category= res.data;
      },
      error:(err:HttpErrorResponse)=>{
console.log(err);

      }

    })

  }

pageChanged(event:number){
   this._MainService.sethome(event).subscribe({
      next:(res)=>{
        console.log(res);
 this.products= res.data;
this.currentPage=res.metadata.currentPage
this.total=res.results
this.pageSize=res.metadata.limit

      },
      error:(err:HttpErrorResponse)=>{
console.log(err);

      }

    })
}

addFav(id:string){
  this._MainService.addToWishList(id).subscribe({
    next:(res)=>{
console.log(res);
this._ToastrService.success(res.message,'Fresh Cart')
this._MainService.WishListNumber.next(res.count)
    },
    error:(err:HttpErrorResponse)=>{
console.log(err);

    }
  })
}


  
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    autoplay:true,
    autoplaySpeed:1 ,
    freeDrag:true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    }
  }

  mainSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 100,
    navText: ['', ''],
    autoplay:true,
    autoplaySpeed:1 ,
    freeDrag:true,
    responsive: {
      0: {
        items: 1
      }
    }
    
  }
}

