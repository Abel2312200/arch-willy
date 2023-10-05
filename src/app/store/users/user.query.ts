import { UserStore } from './users.store';
import { UserState } from './user.state';
import { Query } from '@datorama/akita';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn : 'root'
})
export class UserQuery extends Query<UserState> {

  allUser$    = this.select();
  isLoggedIn$ = this.select(state => !!state.User);

  constructor(protected override store: UserStore) {
    super(store);
  }

  get   User() {
    return !!this.getValue().User;
  }
}
