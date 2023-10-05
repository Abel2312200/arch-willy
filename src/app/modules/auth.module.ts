import { NgModule } from "@angular/core";
import { LoginComponent } from "../view/admin/auth/login/login.component";
import { AuthRoutingModule } from "../view/admin/auth/routes/auth.routing";
import { ServiceModule } from "./services.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TuiButtonModule } from "@taiga-ui/core";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations : [LoginComponent],
  imports : [AuthRoutingModule,ServiceModule,ReactiveFormsModule,TuiButtonModule,FormsModule, CommonModule],
  exports : [],
  entryComponents : []

})
export class AuthModule {
  constructor(){

  }
}

