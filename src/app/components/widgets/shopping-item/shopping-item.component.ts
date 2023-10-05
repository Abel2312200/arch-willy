import { IProductFullInfo } from './../../../core/interface/index';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IShoppingProduct } from 'src/app/core/interface';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingCardComponent implements OnInit {

  @Input("shoppingItemData") item?: IShoppingProduct | IProductFullInfo;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  navigate(url :string) {
    const verification = url.includes("item");
    this.router.navigate([verification ?  url+"/"+this.item?.guid : url ],{state : {product : this.item}})
  }

}
