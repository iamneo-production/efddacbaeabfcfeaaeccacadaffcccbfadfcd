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
    if(fromCurrency == 'INR' && toCurrency=='USD')
    {
      this.result=((1.126735/79.677056)*this.amount).toFixed(2);
      return this.result;
    }
    else if(fromCurrency == 'USD' && toCurrency=='GBP')
    {
      this.result=((0.876893/1.126735)*this.amount).toFixed(2);
      return this.result;
    }
    else if(fromCurrency == 'GBP' && toCurrency=='USD')
    {
      this.result=((1.126735/0.876893)*this.amount).toFixed(2);
      return this.result;
    }
    else
    {
      return "invaild";
    }
  }
}
