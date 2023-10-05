import { Inject, Injectable } from "@angular/core";
import { TuiAlertService, TuiNotification } from "@taiga-ui/core";
import { alert } from "src/app/core/enum";

@Injectable({
  providedIn : 'root'
})
export class AlertService {

  private message ?: string ;
  constructor(@Inject(TuiAlertService) private readonly alertService: TuiAlertService) {}

  public setMessage(message : string) {
    this.message = message;
    return this;
  }

  public error(){
    return this.buildAlert(this.message as string ,alert.ERROR);
  }

  public success(){
    return this.buildAlert(this.message as string ,alert.SUCCESS);
  }

  public warning(){
    return this.buildAlert(this.message as string ,alert.WARNING);
  }

  public info(){
    return this.buildAlert(this.message as string ,alert.INFO);
  }

  private buildAlert(message :string , type : string = alert.ERROR , duration : number = 1000 ) {

    let status = TuiNotification.Error;

    if(type == alert.SUCCESS) {
      status  =  TuiNotification.Success
    }

    if(type == alert.WARNING) {
      status = TuiNotification.Warning
    }

    if(type == alert.INFO) {
      status = TuiNotification.Info
    }

    return this.alertService.open(message,{
     autoClose : true,
     status ,
     hasCloseButton : true,
     hasIcon : true
    }).subscribe();
  }



}
