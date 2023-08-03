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
   Amount=0;
   num:any;
   setSource(s:any){
     this.fromCurrency=s;
   } 
 
   setTarget(t:any){
     this.toCurrency=t;
 
   }
 
   convert(){
    this.num=(this.toCurrency/this.fromCurrency)*this.Amount;
    this.num = Math.round(this.num).toFixed(2);
   }
 }