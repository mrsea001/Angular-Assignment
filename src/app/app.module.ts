import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { MatmenuComponent } from './matmenu/matmenu.component';
import { WeatherComponent } from './weather/weather.component';
import { SharedService } from "./shared.service";
import { FooterComponent } from './footer/footer.component';
import { UserService } from './user.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    MatmenuComponent,
    WeatherComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatMenuModule,MatIconModule
  ],
  providers: [SharedService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
