import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { appRoutes } from './routes'
import { AppComponent }  from './components/app';
import { NavBarComponent }  from './components/nav-bar';
import { ClubsComponent } from "./components/clubs";
import { RegisterComponent } from "./components/sign-in";
import { SignInComponent } from "./components/sign-in";
import { LoadingComponent } from "./components/loading-spinner";
import { DataRepositoryService } from "./services/data-repository"
import { AccountMenuComponent } from "./components/account-menu";
import { ClubComponent } from "app/components/club";


@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    ClubsComponent,
    ClubComponent,
    RegisterComponent,
    SignInComponent,
    LoadingComponent,
    AccountMenuComponent,
    
  ],
  providers: [ DataRepositoryService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
