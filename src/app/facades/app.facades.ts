import { HttpRequestParams, IOrder, IProduct, IUser } from './../core/interface/index';

import { Injectable } from '@angular/core';
import { ModalService } from '../services/modals/jw-modal';
import { AlertService } from '../utils/alert';
import { VerificationService } from '../services/data/verification.service';
import { StorageService } from '../services/storage';
import { Http } from '../services/api';
import { UserStateService } from '../services/states/user.state.service';
import { InteralFunction } from '../services/functions/dataApiFunctions';
import { CookieStorageService } from '../services/storage/cookie';
import { UserAuthentificationService } from '../services/auth';

@Injectable()
export class AppFacades {

  constructor(
    private modalService : ModalService ,
    private alertService : AlertService ,
    private verificationService : VerificationService,
    private storageService : StorageService,
    private apiService :  Http,
    private userStateService : UserStateService ,
    private internalFunction : InteralFunction,
    private cookieStorageService : CookieStorageService,
    private userAuthentificationService : UserAuthentificationService
  ){

  }

  //modal service
  openModal(id: string) {
    return this.modalService.open(id);
  }
  closeModal(id: string) {
    return this.modalService.close(id);
  }

  // alert service
  alertError(message : string ){
    return this.alertService.setMessage(message).error();
  }
  alertSuccess(message : string ){
    return this.alertService.setMessage(message).success();
  }
  alertWarning(message : string ){
    return this.alertService.setMessage(message).warning();
  }
  alertInfo(message : string ){
    return this.alertService.setMessage(message).info();
  }

  //verify fields service
  verifyIfEmail(email:string) {
    return this.verificationService.verifyIfEmail(email);
  }
  verifyObj(obj : {}) {
    return this.verificationService.verifyObj(obj);
  }
  verifyField(field  : string) {
    return this.verificationService.verifyField(field);
  }
  verifyFieldLength(field :string , size : number){
    return this.verificationService.verifyFieldLength(field , size);
  }

  // storage
  get(key : string )  {
    return this.storageService.get(key);
  }

  set(key :string , value : string) {
    this.storageService.set(key,value);
  }

  //COOKIE


  setCookie(key  : string , value : any) {
   this.cookieStorageService.setCookie(key, value);
  }

  setCookieWithDuration(key  : string , value : any, duration : number) {
    this.cookieStorageService.setCookieWithDuration(key, value, duration);
  }

  getCookie(key : string) {
    return this.cookieStorageService.getCookie(key);
  }

  deleteCookie(key:string) {
    this.cookieStorageService.deleteCookie(key)
  }



  // API
  request(params : HttpRequestParams) {
    return this.apiService.request(params);
  }

  // USER STATE
  addUserState(User:IUser) {
    this.userStateService.addUserState(User);
  }

  //authentification

  isLoggedIn(){
    return this.userAuthentificationService.isLoggedIn();
  }

  getUser(){
    return this.userAuthentificationService.getUser();
  }

  logout(){
    this.userAuthentificationService.logout();
  }

  // interal function
  getCategories() {
    return this.internalFunction.getCategories();
  }
  getMarques() {
    return this.internalFunction.getMarques();
  }
  addNewProduct(product : Omit<IProduct,'guid'>) {
    return this.internalFunction.addNewProduct(product);
  }
  loadProducts(){
    return this.internalFunction.loadProducts();
  }
  deleteProduct(guid : string) {
    return this.internalFunction.deleteProduct(guid);
  }
  getHistory(){
    return this.internalFunction.getHistory();
  }
  getStockProduct() {
    return this.internalFunction.getStockProduct();
  }
  addNewCommand(Order : IOrder) {
    return this.internalFunction.addNewCommand(Order);
  }
  getLastFiveCommand(){
    return this.internalFunction.getLastFiveCommand();
  }
  getCommandUsingGuid(guid  : string) {
    return this.internalFunction.getCommandUsingGuid(guid);
  }
  deleteCommandFromGuid(guid : string){
    return this.internalFunction.deleteCommandFromGuid(guid);
  }

  updateStatusCommand(guid : string) {
    return this.internalFunction.updateStatusCommand(guid);
  }
  getCommand() {
    return this.internalFunction.getCommand();
  }

  getCommandReport() {
    return this.internalFunction.getCommandReport();
  }

  getCommandDailyReport(){
    return this.internalFunction.getCommandDailyReport();
  }

  addImages(images  : any ){
    return this.internalFunction.addImages(images)
  }

  addNewUser(user : {}) {
    return this.internalFunction.addNewUser(user);
  }

  updateUserStatus(user : Required<{isActive : number , guid : string}>) {
    return this.internalFunction.updateUserStatus(user);
  }

  deleteUser(guid : string)  {
    return this.internalFunction.deleteUser(guid);
  }

  searchProduct(keywords  : Required<{search : string}>) {
    return this.internalFunction.searchProduct(keywords);
  }

  getUserList(){
    return this.internalFunction.getUserList();
  }

  getUserRole(){
    return this.internalFunction.getUserRole();
  }
}
