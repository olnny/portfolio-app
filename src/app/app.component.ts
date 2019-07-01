import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: '.portfolio',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'portfolio';
}
