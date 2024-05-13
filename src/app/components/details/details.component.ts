import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/shared/cart.service';
import { products } from 'src/app/shared/main';
import { MainService } from 'src/app/shared/main.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  details!:products;
constructor(private _ActivatedRoute:ActivatedRoute,private _MainService:MainService,private _CartService:CartService){}

addCart(id:string){
  this._CartService.addToCart(id).subscribe({
    next:(res)=>{
console.log(res);
    },
    error:(err:HttpErrorResponse)=>{
console.log(err);

    }
  })
}



  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(res)=>{
      let id:any=res.get('id');
this._MainService.subproduct(id).subscribe({
  next:(response)=>{
    console.log(response.data);
    
this.details=response.data;

  }
})
      },
      error:(err:HttpErrorResponse)=>{
console.log(err);

      }
    })
  }
  imgSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    }
  }
}
