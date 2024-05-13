import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{
constructor(private _FormBuilder:FormBuilder,private _ActivatedRoute:ActivatedRoute, private _CartService:CartService ){}
 id:any
ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(res)=>{
        this.id =res.get('id')
console.log(res.get('id'));

     }
    })
  }
payment:FormGroup=this._FormBuilder.group({
    details: '',
    phone: '',
    city: ''
})
handleForm(){
  console.log(this.payment.value);
  this._CartService.payment(this.id,this.payment.value).subscribe({
    next:(res)=>{
  
console.log(res)
if(res.status=="success"){
window.open(res.session.url, '_self' )
}
   }
  })
}
}
