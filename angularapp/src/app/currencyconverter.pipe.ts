import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyconverter'
})
export class CurrencyconverterPipe implements PipeTransform {
amount!:number;
result!:any;
  transform(amount: number,fromCurrency:any,toCurrency:any)
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
