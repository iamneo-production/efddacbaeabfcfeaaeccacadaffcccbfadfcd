import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyconverter'
})
export class CurrencyconverterPipe implements PipeTransform {
amount!:number;
result!:any;
  transform(amount: number,fromCurrency:any,toCurrency:any)
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
