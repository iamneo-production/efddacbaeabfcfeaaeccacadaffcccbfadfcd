import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  amount!:number;
  fromCurrency:string ='USD';
  toCurrency:string = 'USD';
  result:any;
  convert(fromCurrency:any,toCurrency:any)
  {
    if(fromCurrency == '')
  }
}
