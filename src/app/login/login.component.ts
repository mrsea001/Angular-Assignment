import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private user:UserService) { }

  ngOnInit() {
  }
  loginUser(e){

    e.preventDefault();
    var username=e.target.elements[0].value;
    var password=e.target.elements[1].value;

    if(username=="guest" && password=="guest"){
      this.user.setUserLoggedIn(true);
      this.user.userName=username;
      this.router.navigate(["home"]);
      return false;
    }
    else{
      this.user.setUserLoggedIn(false);
    }
  }
}
