import { IUser } from 'src/app/core/interface';
import { UserStore } from './../../store/users/users.store';
import { Injectable, OnDestroy } from '@angular/core';
@Injectable({
  providedIn  : 'root'
})
export class UserStateService implements OnDestroy {

  constructor(private userStore : UserStore){}

  addUserState(User: IUser) {
    this.userStore.update(state=>({ User }));
  }

  ngOnDestroy(): void {
     this.userStore.destroy();
  }
}
