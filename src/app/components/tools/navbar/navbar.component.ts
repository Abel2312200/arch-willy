import { Component, OnInit } from '@angular/core';
import { AppFacades } from 'src/app/facades/app.facades';
import { userStrict } from 'src/app/services/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user !: userStrict ;
  constructor(private appFacades : AppFacades) { }

  ngOnInit(): void {
    this.user = this.appFacades.getUser();
    console.log(this.user);
  }

}
