import {
  IShoppingProduct,
  IUser,
  IOrder,
} from './../../../../core/interface/index';
import { Component,HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppFacades } from 'src/app/facades/app.facades';


@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss'],
})
export class ShopItemComponent implements OnInit {
  detailProduct!: IShoppingProduct;
  default!: string;
  price: number = 0;
  isLoad: boolean = false;


  user: IUser = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
  };

  order: IOrder = {
    user: this.user,
    quantity: 0,
    total: 0,
  };

  isFoward: boolean = false;
  error?: string;

  size: { width: number; height: number } = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.size.width = window.innerWidth;
    this.size.height = window.innerHeight;
  }

  constructor(
    private router: Router,
    private appFacade: AppFacades,
    private activatedRoute : ActivatedRoute
  ) {



  }


  ngOnInit(): void {
    this.activatedRoute.data.subscribe((element:any)=>{
      this.detailProduct = element?.shoppinList?.product;
      this.order.product = this.detailProduct?.idf;
      this.default = this.detailProduct?.images?.image1 as string;
    })
  }

  activeModal(modal: any) {
    this.appFacade.openModal(modal);
  }

  closeModal(index: any) {
    this.appFacade.closeModal(index);
  }

  generateTotalPriceForProduct() {
    this.price = this.detailProduct.price * this.order.quantity;
    this.order.total = this.price;
  }

  submitRequestForm() {
    const emailVerification = this.appFacade.verifyIfEmail(
      this.order.user.email
    );

    if (emailVerification && this.order.quantity) {

      if(this.order.quantity <= this.detailProduct.quantity) {
        this.isLoad = true;
        return this.appFacade.addNewCommand(this.order).subscribe(
          (response: any) => {
            this.isLoad = false;
            this.closeModal("custom-modal-1");
            this.resetField();
            this.appFacade.alertSuccess(response.message);
          },
          (err) => {
            this.isLoad = false;
            return this.error = err.message;
          }
        );
      }
      this.isFoward = false;
      return this.error = "Vous ne pouvez pas commander plus que la quantité en stock";

    }
    this.isFoward = false;
    return (this.error = 'Veuillez renseiger une addresse  email valide');
  }

  next() {
    const verification = this.appFacade.verifyObj(this.user);
    if (verification.count == 0) {
      this.error = '';
      return (this.isFoward = !this.isFoward);
    }
    return (this.error = 'veuillez remplir les différents champs');
  }


  resetField(){
    this.user.email = "";
    this.user.firstname = "";
    this.user.lastname = "";
    this.user.phone = "";
  }


}
