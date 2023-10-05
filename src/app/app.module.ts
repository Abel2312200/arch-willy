import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER, TuiButtonModule } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './view/guess/landing/landing.component';
import { ComponentModule } from "./modules/components.module";
import { ShoppingModule } from "./modules/shopping.module";
import { AuthModule } from "./modules/auth.module";
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardModule } from "./modules/dashboard.module";
import { TuiHostedDropdownModule, TuiDataListModule } from '@taiga-ui/core';
import {TuiProgressModule} from '@taiga-ui/kit';
import { ContactComponent } from './view/guess/contact/contact.component';
import { AboutComponent } from './view/guess/about/about.component';




@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AdminLayoutComponent,
    ContactComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    HttpClientModule,
    ComponentModule,
    ShoppingModule,
    AuthModule,
    TuiAlertModule,
    DashboardModule,
    TuiButtonModule,
    TuiHostedDropdownModule,
    TuiDataListModule,
    TuiProgressModule


],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
