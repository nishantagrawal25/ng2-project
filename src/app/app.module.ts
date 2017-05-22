import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }  from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { HomeComponent } from './components/pages/home.component';
import { AboutComponent } from './components/pages/about.component';
import { ProfileComponent } from './components/profile.component';
import { HttpModule } from '@angular/http';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, NavbarComponent, JumbotronComponent, HomeComponent, AboutComponent, ProfileComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
