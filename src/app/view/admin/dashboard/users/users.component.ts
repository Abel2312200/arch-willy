import { Component, OnInit } from '@angular/core';
import { AppFacades } from 'src/app/facades/app.facades';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  roles: Required<{ title: string; id: number }>[] = [];
  enableUserForm: boolean = false;
  user = {
    email: '',
    country: 'CI',
    isActive: 1,
    firstname: '',
    lastname: '',
    password: '12345',
    role_id: '',
    phone: '',
  };

  constructor(private appFacades: AppFacades) {}

  ngOnInit(): void {
    this.getUserList();
    this.getUserRole();
  }

  getUserList() {
    this.appFacades.getUserList().subscribe((response: any) => {
      this.users = response;
    });
  }

  getUserRole() {
    this.appFacades.getUserRole().subscribe((response: any) => {
      this.roles = response.filter((element: any) => element.title != 'user');
    });
  }

  addNewUser() {
    const log = this.appFacades.verifyObj(this.user);
    if (log.count != 0) {
      return this.addError(log.index as number[]);
    }
    this.appFacades.addNewUser(this.user).subscribe(
      (response : any) => {
        this.enableUserForm = false;
        this.appFacades.alertSuccess(response?.message);
        this.getUserList();
      },
      (error) => {
        this.appFacades.alertError(!!error.error.message ? error.error.message : error.message)
        console.log(error);
      }
    );
    console.log(this.user);
  }

  addError(index: number[]) {
    return index.forEach((element) => {
      this.appFacades.alertError(
        `Veuillez renseigner ${Object.keys(this.user)[element]}`
      );
    });
  }

  getUpdateEvent(event : any) {
     if(!!event) return this.getUserList();
  }
}
