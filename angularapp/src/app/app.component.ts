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
  setTarget(target:any)
  {
    this.toCurrency=target;
  }
  convert()
  {
    this.result=(this.toCurrency/this.fromCurrency)*this.amount;
    this.result=Math.round(this.result).toFixed(2);
  }
}
