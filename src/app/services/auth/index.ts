import { IFullUser} from "src/app/core/interface";
import { StorageService } from "../storage";
import { Injectable } from "@angular/core";
const  USER : string = "user";

export type userStrict = Omit<IFullUser,'password'>;

@Injectable()
export class UserAuthentificationService {

  user !: userStrict;
  constructor(private storageService : StorageService){
    this.loadUserData();
  }

  isLoggedIn() {
    return !!this.user
  }

  getUser() : userStrict {
    return this.user;
  }

  logout(){
    this.storageService.delete(USER);
  }
  loadUserData()  {
    this.storageService.get(USER).subscribe((response)=>{
      this.user = !!response ? JSON.parse(response) as userStrict : {} as userStrict;
    })
  }
}
