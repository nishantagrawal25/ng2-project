import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { HomeComponent } from './components/pages/home.component';
import { AboutComponent } from './components/pages/about.component';
import { ProfileComponent } from './components/profile.component';
import { GithubService } from './services/github.service';

@Component({
  selector: 'my-app',
  template: '<profile></profile>',
  providers: [GithubService]
  
})
export class AppComponent  { name = 'Angular'; }
