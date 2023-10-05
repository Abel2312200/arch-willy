import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRequestType } from 'src/app/core/enum';
import { HttpRequestParams, ILoginPayload } from 'src/app/core/interface';
import { AppFacades } from 'src/app/facades/app.facades';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  passwordType  : string  = 'password';
  isClicked     : boolean = false;
  text          : string  = 'Afficher mon mot de passe';
  startSpinning : boolean = false;
  login   : ILoginPayload = {
    email : '',
    password : ''
  }
  constructor(private appFacades : AppFacades , private router : Router  ) { }

  ngOnInit(): void {
  }

  showMyPassword(){
    this.isClicked = ! this.isClicked;
    this.isClicked ? this.passwordType = "text"  : this.passwordType = "password";
    this.isClicked ? this.text = "Cacher mon mot de passe " : this.text = "Afficher mon mot de passe";
  }

  authentification(){
    const verification  = this.appFacades.verifyObj(this.login);
    if(verification.count  > 0)
    return this.displayErrors(verification?.index as number[]);
    if(!this.appFacades.verifyIfEmail(this.login.email)){
      return this.appFacades.alertError(`veuillez renseigner une addresse email valide`)
    }
    return this.connectUser(this.login);
  }

  connectUser(loginPayload : ILoginPayload){

    const request : HttpRequestParams  = {
      body : loginPayload,
      url  : '/login',
      method : HttpRequestType.POST,
      isEnc : false
    }

    this.appFacades.request(request).subscribe(
      {
        next : (responce : any )=>{
          this.startSpinning  = false;
          if(!!responce.user){
            this.appFacades.alertSuccess(responce.message);
            this.appFacades.addUserState(responce.user);
            this.appFacades.set('user',responce.user);
            location.href = "/dashboard/";
          }
        },
        error : (err) => {
          this.startSpinning  = false;
          this.appFacades.alertError(err.error.message ?  err.error.message : err.message);
          console.log(err);
        },
        complete : () =>{
          this.startSpinning = false;
        }
      }
    );
  }

  displayErrors(errorTable : number[]) {
    for(let index of errorTable) {
      this.appFacades.alertError(`veuillez renseigner votre ${Object.keys(this.login)[index]}`)
    }
  }

}
