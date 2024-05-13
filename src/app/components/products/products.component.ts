import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/shared/main.service';
import {products} from './../../shared/main';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products:any[]=[];
  pageSize:number=0
  total:number=0
  currentPage:number=1
  constructor(private _MainService:MainService){}
   
    ngOnInit(): void {
      this._MainService.sethome().subscribe({
        next:(res)=>{
          console.log(res);
   this.products= res.data;
   this.pageSize=res.metadata.limit;
   this.currentPage=res.metadata.currentPage;
   this.total= res.results;

        },
        error:(err:HttpErrorResponse)=>{
  console.log(err);
  
        }
  
      })
    }
  
    pageChanged(event:any):void
    {
      this._MainService.sethome(event).subscribe({
        next:(res)=>{
          console.log(res);
   this.products= res.data;
   this.pageSize=res.metadata.limit;
   this.currentPage=res.metadata.currentPage;
   this.total= res.results   ;

        },
        error:(err:HttpErrorResponse)=>{
  console.log(err);
  
        }
  
      })
    }
  }

