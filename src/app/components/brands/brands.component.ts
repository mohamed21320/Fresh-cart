import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/shared/main.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit{
constructor(private _MainService:MainService){}
brands:any[]=[];
  ngOnInit(): void {
    this._MainService.setbrands().subscribe({
      next:(res)=>{
        console.log(res);
        
 this.brands= res.data;
      },
      error:(err:HttpErrorResponse)=>{
console.log(err);

      }

    })
  }


}
