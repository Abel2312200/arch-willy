import { NgModule } from '@angular/core';
import { ShopOrderComponent } from '../shop-order/shop-order.component';
import { ShopItemComponent } from './../shop-item/shop-item.component';
import { ShopListComponent } from './../shop-list/shop-list.component';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingResolverService } from 'src/app/services/resolvers/shopping-resolver.service';

const routes: Routes = [
  {
    path: 'list',
    component: ShopListComponent,

  },
  {
    path: 'item/:guid',
    component: ShopItemComponent,
    resolve: {
      shoppinList: ShoppingResolverService,
    },
  },
  {
    path: 'order',
    component: ShopOrderComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingRoutingModule {}
