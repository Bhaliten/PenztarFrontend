import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PenztarFrontend';
  testData = 12;

  onVoted($event: any) {
    console.log($event)
    alert();
  }
}
