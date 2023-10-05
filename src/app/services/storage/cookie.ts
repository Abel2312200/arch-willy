import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies';

@Injectable()
export class CookieStorageService {

  constructor(){

  }

  setCookie(key : string , value : any) {
    Cookie.set(key , value);
  }

  setCookieWithDuration(key : string , value : any , duration : number) {
    Cookie.set(key , value ,duration);
  }

  getCookie(key : string ) {
    return Cookie.get(key);
  }

  deleteCookie(key : string ) {
    Cookie.delete(key);
  }
}
