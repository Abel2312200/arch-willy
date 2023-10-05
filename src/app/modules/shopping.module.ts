import { TuiBadgeModule, TuiInputModule, TuiIslandModule } from '@taiga-ui/kit';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ShoppingRoutingModule } from "../view/guess/shopping/routes/shopping.routes";
import { ShopListComponent } from "../view/guess/shopping/shop-list/shop-list.component";
import { ShopItemComponent } from "../view/guess/shopping/shop-item/shop-item.component";
import { ShopOrderComponent } from "../view/guess/shopping/shop-order/shop-order.component";
import { ComponentModule } from "./components.module";
import {TuiButtonModule, TuiDataListModule, TuiNotificationModule} from '@taiga-ui/core';
import {TuiDataListWrapperModule, TuiSelectModule} from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TuiInputCountModule} from '@taiga-ui/kit';
import { ServiceModule } from './services.module';


@NgModule({
  declarations : [
    ShopListComponent,
    ShopItemComponent,
    ShopOrderComponent,
  ],
  imports : [
    ShoppingRoutingModule ,
    ComponentModule,
    CommonModule,
    TuiInputModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
    TuiSelectModule,
    FormsModule,
    ReactiveFormsModule,
    TuiButtonModule,
    TuiInputCountModule,
    TuiIslandModule,
    TuiNotificationModule,
    TuiBadgeModule,
    ServiceModule
  ],
  providers : [],
  entryComponents : []
})
export class ShoppingModule {

}
