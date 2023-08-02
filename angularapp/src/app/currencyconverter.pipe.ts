import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyconverter'
})
export class CurrencyconverterPipe implements PipeTransform {
amount!:number;
resValue!:any;
  transform(amount: number,fromCurrency:any,toCurrency:any)
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
