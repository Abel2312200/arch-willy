import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TuiHostedDropdownComponent } from '@taiga-ui/core';
import { IFullUser } from 'src/app/core/interface';
import { AppFacades } from 'src/app/facades/app.facades';
import { userStrict } from 'src/app/services/auth';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
  providers: [AppFacades],
})
export class AdminLayoutComponent implements OnInit {
  @ViewChild('sideBar', { static: false }) sideBar?: ElementRef;
  @ViewChild(TuiHostedDropdownComponent)
  component?: TuiHostedDropdownComponent;
  color?: string;
  readonly items = ['Edit', 'Download', 'Rename', 'Delete'];
  open = false;
  user  : userStrict = this.appFacades.getUser();

  constructor(
    private router: Router,
    private appFacades: AppFacades,
    private Render: Renderer2
  ) {}
  logout() {
    this.appFacades.logout();
    this.appFacades.alertSuccess("Vous etes deconnecté");
    this.router.navigate(['/v1/login']);
  }

  ngOnInit(): void {
    this.appFacades.get('preference').subscribe((response: any) => {
      this.color = JSON.parse(response).color;
    });
  }

  ngAfterViewInit(): void {

  }

  onClick(): void {
    this.open = false;
    this.component?.nativeFocusableElement?.focus();
  }
}
