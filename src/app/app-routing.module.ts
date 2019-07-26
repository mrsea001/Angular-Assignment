import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {WeatherComponent} from "./weather/weather.component";
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"weather",component:WeatherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
