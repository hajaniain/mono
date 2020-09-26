import { Component } from '@angular/core';

@Component({
  selector: 'mono-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'admin-mono';

  constructor() {
    console.log('TEST');
  }
}
