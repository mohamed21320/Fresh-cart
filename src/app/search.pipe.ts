import { products } from 'src/app/shared/main';
;
import { Pipe, PipeTransform } from '@angular/core';
// import { products } from './shared/main';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arr:products[],term:string): products[] {
    return arr.filter((products)=>products.title.toLowerCase().includes(term.toLowerCase()))
  }

}
