import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-zerocounts',
  templateUrl: './zerocounts.component.html',
  styleUrls: ['./zerocounts.component.scss']
})

export class ZerocountsComponent implements OnInit {
  private resCalculate: any;
  private zerocontains: any;
  private code:string;

/**Validacion del form */
  public frmCalcuteFact = this.fb.group({
    numberSetted: ["", Validators.required]
  });
  constructor(public fb: FormBuilder) {
      this.resCalculate= 0;
      this.zerocontains= 0;
      this.code="";
      }

  ngOnInit() {
  }

  loadCode(){
    this.code = '<b>Factorial:</b><br> ' + this.factorial;
    this.code += '<br><br><b>Cantidad de Ceros:</b><br> ' + this.cantidadCeros;
  }

/*Maneja el evento submit del form*/
doFactorial(event){
  let res = this.factorial(this.frmCalcuteFact.value.numberSetted);
  this.zerocontains= "No calculable";
  this.resCalculate= this.fixed(res);
  this.zerocontains= this.cantidadCeros(this.resCalculate);
  if (!isFinite(this.resCalculate)){
    this.resCalculate=res;
  }
}

/*Permite convertir numeros en forma e10 a 10000000000*/
fixed(x : any){
  var e = parseInt(x.toString().split('+')[1]);
    if (e > 20) {
        e -= 20;
        x /= Math.pow(10,e);
        x += (new Array(e+1)).join('0');
    }
  return x;
}

/*Calcula la cantidad de ceros que posee un numero*/
cantidadCeros(n : any){
 let x = n.toString();
 let j=0;
 for(let i = x.length-1; i>0 ;i--){
   if(x.charAt(i)!='0') break;
   j+=1;
 }
 return j;
}

/*Calcula el factorial de un num*/
factorial(n:any){
  let fact =1;
  for (let i=1; i<n+1; i++)
    fact *= i;
  return fact;
}

/*impide que se ingresen otros caracteres que no sean numeros */
  onlyNumber(e) {
    return (e.keyCode >= 48 && e.keyCode <= 57);
  }
}
