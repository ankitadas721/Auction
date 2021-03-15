import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Auction';
  scroll() {
    window.scrollTo(0, document.body.scrollHeight);
  }
}
