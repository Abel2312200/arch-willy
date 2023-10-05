import { Injectable } from '@angular/core';

@Injectable()
export class VerificationService {

  constructor() {

  }

  verifyIfEmail(field :string) {
   return field.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
  }

  verifyField(field :string ) {
    return !!field
  }

  verifyFieldLength(field : string ,size : number) {
    return field.length >= size;
  }

  verifyObj(obj : {}  , typelog = 'log') {

    let tbindex : number[] = [];
    let count = 0;

    Object.values(obj).forEach((value,index)=>{
      if(!value) {
        count  = count + 1 ;
        tbindex.push(index);
      }
    })
    return  typelog == 'log' ? {index : tbindex , count } : {count};

  }


}
