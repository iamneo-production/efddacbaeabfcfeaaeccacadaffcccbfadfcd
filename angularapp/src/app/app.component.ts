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
   amount=0;
   num:any;
   setSource(s:any){
     this.fromCurrency=s;
   } 
 
   setTarget(t:any){
     this.toCurrency=t;
 
   }
 
   convert(fromCurrency:any,toCurrency:any){
    if(fromCurrency=='INR' && toCurrency=='USD')
    {
    this.num=(1.126735/79.677056)*this.amount;
    this.num = Math.round(this.num);
   }
   else if(fromCurrency=='USD' && toCurrency=='GBP')
   {
   this.num=(0.876893/1.126735)*this.amount;
   this.num = Math.round(this.num);
  }
   else if(fromCurrency=='GBP' && toCurrency=='USD')
   {
   this.num=(1.126735/0.876893)*this.amount;
   this.num = Math.round(this.num);
  } 
 }
}