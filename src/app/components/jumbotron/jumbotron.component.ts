import { Component } from '@angular/core';

@Component({
  moduleId : module.id,
  selector: 'jumbotron',
  templateUrl: 'jumbotron.component.html',
})
export class JumbotronComponent {
  private jbtHeading:string;
  private jbtText:string;
  private jbtBtnText:string;
  private jbtBtnUrl:string;
  

  constructor() {
    this.jbtHeading = "Hello world";
    this.jbtText = `This is a simple hero unit, a simple jumbotron-style component for 
            calling extra attention to featured content or information`;
    this.jbtBtnText = "Learn more";
    this.jbtBtnUrl = "http://www.google.com"
  }
}
