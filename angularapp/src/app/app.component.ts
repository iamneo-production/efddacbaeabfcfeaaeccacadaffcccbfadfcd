import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  fromCurrency=0;
  toCurrency=0;
  amount:any;
  result:any;
  setSource(source:any)
  {
    this.fromCurrency=source;
  }
  setTarge
}
