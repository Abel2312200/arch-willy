import { IProductFullInfo } from 'src/app/core/interface';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AppFacades } from 'src/app/facades/app.facades';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss'],
})
export class ShopListComponent implements OnInit {
  piece = new FormControl();
  marque = new FormControl();
  searchmarque = new FormControl();
  products: any[] = [
    {
      title : "Kita",
      marque : "Made in Bouake",
      type   : "Altoo",
      price  : 40000,
      reduction : 15000,
      description: "page d'origine baoulé",
      quantity : 15,
      images : {
        image1 : "https://kumikentedesign.com/wp-content/uploads/2021/03/p-2.jpg",
        image2 : "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_720,h_480/https://voyager-en-cote-divoire.com/wp-content/uploads/2022/03/Abidjan.net-Le-tissu-baoule-de-Tiebissou.jpg"
      },
    },
    {
      title : "Kita",
      marque : "Made in Bouake",
      type   : "Mad",
      price  : 100000,
      reduction : 15000,
      description: "page d'origine baoulé",
      quantity : 12,
      images : {
        image1 : "https://kumikentedesign.com/wp-content/uploads/2021/03/p-2.jpg",
        image2 : "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_720,h_480/https://voyager-en-cote-divoire.com/wp-content/uploads/2022/03/Abidjan.net-Le-tissu-baoule-de-Tiebissou.jpg"
      }
    }
  ];
  pieces: string[] = [];
  keyword!: string;
  marques: string[] = ['All'];
  searchResult: IProductFullInfo[] = [];

  constructor(
    private appFacades: AppFacades,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.getMarques();
    this.loadProducts();
  }

  getCategories() {
    this.appFacades.getCategories().subscribe((response: any) => {
      response.data.map((element: any) => {
        this.pieces.push(element.name);
      });
    });
  }

  getMarques() {
    this.appFacades.getMarques().subscribe((response: any) => {
      response.data.map((element: any) => {
        this.marques.push(element.name);
      });
    });
  }

  search() {
    if (!!this.keyword) {
      console.log(this.keyword);
      return this.appFacades
        .searchProduct({ search: this.keyword })
        .subscribe((response: any) => {
          console.log(response);
          this.searchResult = response as IProductFullInfo[];
        });
    }
    return (this.searchResult = []);
  }

  loadProducts() {
    this.appFacades.loadProducts().subscribe((response) => {
      this.products = response as IProductFullInfo[];
    });
  }

  filterElementByMarque(event: any) {
    console.log(event);
  }

  openModal(name: string) {
    this.appFacades.openModal(name);
  }

  closeModal(name: string) {
    this.appFacades.closeModal(name);
  }

  navigate(url :string , item : IProductFullInfo) {
    const verification = url.includes("item");
    this.router.navigate([verification ?  url+"/"+item?.guid : url ],{state : {product : item}})
  }
}
