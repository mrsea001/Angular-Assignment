import { Component } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Project';
  constructor(private user:UserService,public router: Router){}
  IsUserLoggedIn(){
    return this.user.getUserLoggedIn();
  }
}
