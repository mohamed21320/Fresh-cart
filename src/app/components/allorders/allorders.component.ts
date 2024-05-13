import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.css']
})
export class AllordersComponent implements OnInit{
constructor(private _CartService:CartService){}
products:any[]=[];
Category:any[]=[];
pageSize:number=0
  total:number=0
  currentPage:number=1
  ngOnInit(): void {
   this._CartService.allOrder().subscribe({
    next:(res)=>{
      console.log(res);
      this.products= res.data;
      this.currentPage=res.metadata.currentPage
this.total=res.results
this.pageSize=res.metadata.limit

    },error:(err:HttpErrorResponse)=>{
      console.log(err);
      
    }
   })
  }
  pageChanged(event:number){
    this._CartService.allOrder(event).subscribe({
       next:(res)=>{
         
 this.currentPage=res.metadata.currentPage
 this.total=res.results
 this.pageSize=res.metadata.limit
 
       },
       error:(err:HttpErrorResponse)=>{
 console.log(err);
 
       }
 
     })
 }

}
