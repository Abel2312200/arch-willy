
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ModalService } from '../services/modals/jw-modal';
import { AppFacades } from '../facades/app.facades';
import { AlertService } from '../utils/alert';
import { VerificationService } from '../services/data/verification.service';
import { StorageService } from '../services/storage';
import { CookieStorageService } from '../services/storage/cookie';
import { UserAuthentificationService } from '../services/auth';


@NgModule({
  declarations : [

  ],
  imports : [
    CommonModule
  ],
  providers : [
    ModalService,
    AlertService,
    VerificationService,
    StorageService,
    CookieStorageService,
    UserAuthentificationService,
    AppFacades,

  ],
  entryComponents : []
})
export class ServiceModule {

}
