import { Injectable } from '@angular/core';
import { UserState } from './user.state';
import { Store, StoreConfig } from '@datorama/akita';


export function createInitialState(): UserState {
  return {
    User :  null
  };
}

@Injectable({
  providedIn : 'root'
})
@StoreConfig({ name: 'User' })
export class UserStore extends Store<UserState> {
  constructor() {
    super(createInitialState());
  }
}
