import { Injectable } from '@angular/core';
import { HttpRequestType } from 'src/app/core/enum';
import { Http } from '../api';
import { IOrder, IProduct } from 'src/app/core/interface';
import { addImageToTheStorage } from '../firebase/storage';

@Injectable({
  providedIn : 'root'
})
export class InteralFunction {

  constructor(private appFacades : Http){

  }

  getCategories() {
    const httpRequest = {body  : {},isEnc : false,url : '/categorie/gets',method : HttpRequestType.GET};
    return this.appFacades.request(httpRequest);
  }

  getMarques() {
    const httpRequest = {body  : {},isEnc : false,url : '/marque/gets',method : HttpRequestType.GET};
    return this.appFacades.request(httpRequest);
  }


  addNewProduct(product : Omit<IProduct,'guid'>){
    const httpRequest = {body  : product,isEnc : false,url : '/product/add',method : HttpRequestType.POST};
    return this.appFacades.request(httpRequest);
  }

  loadProducts(){
    const httpRequest = {body  : {},isEnc : false,url : '/product/gets',method : HttpRequestType.GET};
    return this.appFacades.request(httpRequest);
  }

  deleteProduct(guid : string ){
    const httpRequest = {body  : {},isEnc : false,url : '/product/delete/'+guid,method : HttpRequestType.DELETE};
    return this.appFacades.request(httpRequest);
  }

  getHistory(){
    const httpRequest = {body  : {},isEnc : false,url : '/history/gets',method : HttpRequestType.GET};
    return this.appFacades.request(httpRequest);
  }

  getStockProduct() {
    const httpRequest = {body  : {},isEnc : false,url : '/product/stock/get',method : HttpRequestType.GET};
    return this.appFacades.request(httpRequest);
  }

  addNewCommand(Order : IOrder) {
    const httpRequest = {body  : Order,isEnc : false,url : '/command/add',method : HttpRequestType.POST};
    return this.appFacades.request(httpRequest);
  }

  getLastFiveCommand() {
    const httpRequest = {body  : {},isEnc : false,url : '/command/gets/five',method : HttpRequestType.GET};
    return this.appFacades.request(httpRequest);
  }

  getCommandUsingGuid(guid  : string ) {
    const httpRequest = {body  : {},isEnc : false,url : '/command/get/' + guid,method : HttpRequestType.GET};
    return this.appFacades.request(httpRequest);
  }

  deleteCommandFromGuid(guid : string) {
    const httpRequest = {body  : {},isEnc : false,url : '/command/delete/' + guid,method : HttpRequestType.DELETE};
    return this.appFacades.request(httpRequest);
  }

  updateStatusCommand(guid  : string) {
    const httpRequest = {body  : {},isEnc : false,url : '/command/update/status/' + guid,method : HttpRequestType.GET};
    return this.appFacades.request(httpRequest);
  }

  getCommand(){
    const httpRequest = {body  : {},isEnc : false,url : '/command/gets' ,method : HttpRequestType.GET};
    return this.appFacades.request(httpRequest);
  }

  getCommandReport(){
    const httpRequest = {body  : {},isEnc : false,url : '/command/reporting' ,method : HttpRequestType.GET};
    return this.appFacades.request(httpRequest);
  }

  getCommandDailyReport(){
    const httpRequest = {body  : {},isEnc : false,url : '/command/report' ,method : HttpRequestType.GET};
    return this.appFacades.request(httpRequest);
  }

  addImages(images :  any) {
    return addImageToTheStorage(images);
  }

  addNewUser(user : {}) {
    const httpRequest = {body  : user,isEnc : false,url : '/register' ,method : HttpRequestType.POST};
    return this.appFacades.request(httpRequest);
  }

  updateUserStatus(user : Required<{isActive : number , guid : string}>){
    const httpRequest = {body  : user,isEnc : false,url : '/user/disable' ,method : HttpRequestType.POST};
    return this.appFacades.request(httpRequest);
  }

  deleteUser(guid : string) {
    const httpRequest = {body  : {},isEnc : false,url : '/user/remove/'+ guid ,method : HttpRequestType.GET};
    return this.appFacades.request(httpRequest);
  }

  searchProduct(keywords  : Required<{search : string}>)  {
    const httpRequest = {body  : keywords,isEnc : false,url : '/product/search' ,method : HttpRequestType.POST};
    return this.appFacades.request(httpRequest);
  }

  getUserList() {
    const httpRequest = {body  : {} ,isEnc : false,url : '/user/gets' ,method : HttpRequestType.GET};
    return this.appFacades.request(httpRequest);
  }

  getUserRole() {
    const httpRequest = {body  : {} ,isEnc : false,url : '/user/roles' ,method : HttpRequestType.GET};
    return this.appFacades.request(httpRequest);
  }

}
