import { CartService } from 'src/app/shared/cart.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category, products } from 'src/app/shared/main';
import { MainService } from 'src/app/shared/main.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit{
  details!:Category;
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
this._MainService.subCatig(id).subscribe({
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
  
}
