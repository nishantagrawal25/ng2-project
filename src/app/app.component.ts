import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { HomeComponent } from './components/pages/home.component';
import { AboutComponent } from './components/pages/about.component';
import { GithubService } from './services/github.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [GithubService]
  
})
export class AppComponent  { name = 'Angular'; }
