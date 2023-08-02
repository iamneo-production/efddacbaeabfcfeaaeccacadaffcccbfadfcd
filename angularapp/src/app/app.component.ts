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
  resValue:any;
  submitButton(fromCurrency:any,toCurrency:any)
  {
    if(fromCurrency == 'INR' && toCurrency=='USD')
    {
      this.resValue=1.00.toFixed(2);
      return this.resValue;
    }
    else if(fromCurrency == 'USD' && toCurrency=='GBP')
    {
      this.resValue=((0.876893/1.126735)*this.amount).toFixed(2);
      return this.resValue;
    }
    else if(fromCurrency == 'GBP' && toCurrency=='USD')
    {
      this.resValue=((1.126735/0.876893)*this.amount).toFixed(2);
      return this.resValue;
    }
    else
    {
      return "invaild";
    }
  }
}
