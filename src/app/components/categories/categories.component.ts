import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/shared/main.service';
import {products} from './../../shared/main';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
  Category:any[]=[];
constructor(private _MainService:MainService, private _ActivatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this._MainService.setcategories().subscribe({
      next:(res)=>{
        console.log(res);
        
        this.Category=res.data;
      },error:(err:HttpErrorResponse)=>{
        console.log(err);
      }
    })
  }


}
