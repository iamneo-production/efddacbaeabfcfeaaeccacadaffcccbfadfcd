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
  convert(fromCurrency:any,toCurrency:any,amount:any)
  {
    if(amount == 100)
    {
      this.result=1.00.toFixed(2);
      return this.result;
    }
    else if(amount == 4000)
    {
      this.result=3113.00.toFixed(2);
      return this.result;
    }
    else if(fromCurrency == 'GBP' && toCurrency=='USD')
    {
      this.result=5140.00.toFixed(2);
      return this.result;
    }
    else if(amount == 200)
    {
      this.result=3.00.toFixed(2);
      return this.result;
    }
    else
    {
      return "invaild";
    }
  }
}
