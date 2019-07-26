import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isUserLoggedIn;
  public userName ="";
  constructor() {
    this.isUserLoggedIn==false;
  }
  setUserLoggedIn(val:boolean){
    this.isUserLoggedIn=val;
  }
  getUserLoggedIn(){
    return this.isUserLoggedIn;
  }
}
