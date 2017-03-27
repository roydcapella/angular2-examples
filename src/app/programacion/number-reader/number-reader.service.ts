import { Injectable } from '@angular/core';

@Injectable()
export class NumberReaderService {
  private  sw:boolean;
	//private n :number;
	private importe_parcial:string;
	private num:string;
	private letra:string;
	private letras:string;
	private letram:string;
	private letradm:string;
	private letracm:string;
	private letramm:string;
	private letradmm:string;

  constructor() {
    //this.n = 0;
    this.sw=false;
   }

  transform(n:number){
      this.sw=false;
      this.letras = this.decmillon(n);
      return this.letras;
  }

unidad(n:number){
    switch (n){
    case 9:
        this.num = "nueve";
        break;
    case 8:
        this.num = "ocho";
        break;
    case 7:
        this.num = "siete";
        break;
    case 6:
        this.num = "seis";
        break;
    case 5:
        this.num = "cinco";
        break;
    case 4:
        this.num = "cuatro";
        break;
    case 3:
        this.num = "tres";
        break;
    case 2:
        this.num = "dos";
        break;
    case 1:
        if (this.sw == false)
          this.num = "uno";
        else
          this.num = "un";
        break;
    case 0:
        this.num = "";
        break;
    }
    return this.num;
  }

decena(n:number){

    if (n >= 90 && n <= 99)
    {
      this.letra = "noventa ";
      if (n > 90)
        this.letra = this.letra.concat("y ").concat(this.unidad(n - 90));
    }
    else if (n >= 80 && n <= 89)
    {
      this.letra = "ochenta ";
      if (n > 80)
        this.letra = this.letra.concat("y ").concat(this.unidad(n - 80));
    }
    else if (n >= 70 && n <= 79)
    {
      this.letra = "setenta ";
      if (n > 70)
        this.letra = this.letra.concat("y ").concat(this.unidad(n - 70));
    }
    else if (n >= 60 && n <= 69)
    {
      this.letra = "sesenta ";
      if (n > 60)
        this.letra = this.letra.concat("y ").concat(this.unidad(n - 60));
    }
    else if (n >= 50 && n <= 59)
    {
      this.letra = "cincuenta ";
      if (n > 50)
        this.letra = this.letra.concat("y ").concat(this.unidad(n - 50));
    }
    else if (n >= 40 && n <= 49)
    {
      this.letra = "cuarenta ";
      if (n > 40)
        this.letra = this.letra.concat("y ").concat(this.unidad(n - 40));
    }
    else if (n >= 30 && n <= 39)
    {
      this.letra = "treinta ";
      if (n > 30)
        this.letra = this.letra.concat("y ").concat(this.unidad(n - 30));
    }
    else if (n >= 20 && n <= 29)
    {
      if (n == 20)
        this.letra = "veinte ";
      else
        this.letra = "veinti".concat(this.unidad(n - 20));
    }
    else if (n >= 10 && n <= 19)
    {
      switch (n){
      case 10:

        this.letra = "diez ";
        break;

      case 11:

        this.letra = "once ";
        break;

      case 12:

        this.letra = "doce ";
        break;

      case 13:

        this.letra = "trece ";
        break;

      case 14:

        this.letra = "catorce ";
        break;

      case 15:

        this.letra = "quince ";
        break;

      case 16:

        this.letra = "dieciseis ";
        break;

      case 17:

        this.letra = "diecisiete ";
        break;

      case 18:

        this.letra = "dieciocho ";
        break;

      case 19:

        this.letra = "diecinueve ";
        break;

      }
    }
    else
      this.letra = this.unidad(n);

  return this.letra;
  }

centena(n:number){
    if (n >= 100)
    {
      if (n >= 900 && n <= 999)
      {
        this.letra = "novecientos ";
        if (n > 900)
          this.letra = this.letra.concat(this.decena(n - 900));
      }
      else if (n >= 800 && n <= 899)
      {
        this.letra = "ochocientos ";
        if (n > 800)
          this.letra = this.letra.concat(this.decena(n - 800));
      }
      else if (n >= 700 && n <= 799)
      {
        this.letra = "setecientos ";
        if (n > 700)
          this.letra = this.letra.concat(this.decena(n - 700));
      }
      else if (n >= 600 && n <= 699)
      {
        this.letra = "seiscientos ";
        if (n > 600)
          this.letra = this.letra.concat(this.decena(n - 600));
      }
      else if (n >= 500 && n <= 599)
      {
        this.letra = "quinientos ";
        if (n > 500)
          this.letra = this.letra.concat(this.decena(n - 500));
      }
      else if (n >= 400 && n <= 499)
      {
        this.letra = "cuatrocientos ";
        if (n > 400)
          this.letra = this.letra.concat(this.decena(n - 400));
      }
      else if (n >= 300 && n <= 399)
      {
        this.letra = "trescientos ";
        if (n > 300)
          this.letra = this.letra.concat(this.decena(n - 300));
      }
      else if (n >= 200 && n <= 299)
      {
        this.letra = "doscientos ";
        if (n > 200)
          this.letra = this.letra.concat(this.decena(n - 200));
      }
      else if (n >= 100 && n <= 199)
      {
        if (n == 100)
          this.letra = "cien ";
        else
          this.letra = "ciento ".concat(this.decena(n - 100));
      }
    }
    else
      this.letra = this.decena(n);

    return this.letra;
  }

  miles(n:number){
    if (n >= 1000 && n <2000){
      this.letram = ("mil ").concat(this.centena(n%1000));
    }
    if (n >= 2000 && n <10000){
      this.sw=true;
      this.letram = this.unidad(n/1000).concat(" mil ").concat(this.centena(n%1000));
    }
    if (n < 1000)
      this.letram = this.centena(n);

    return this.letram;
  }

  decmiles(n:number){
    if (n == 10000)
      this.letradm = "diez mil";
    if (n > 10000 && n <20000){
      this.sw=true;
      this.letradm = this.decena(n/1000).concat("mil ").concat(this.centena(n%1000));
    }
    if (n >= 20000 && n <100000){
      this.sw=true;
      this.letradm = this.decena(n/1000).concat(" mil ").concat(this.miles(n%1000));
    }


    if (n < 10000)
      this.letradm = this.miles(n);

    return this.letradm;
  }

  cienmiles(n:number){
    if (n == 100000)
      this.letracm = "cien mil";
    if (n >= 100000 && n <1000000){
      this.sw=true;
      this.letracm = this.centena(n/1000).concat(" mil ").concat(this.centena(n%1000));
    }
    if (n < 100000)
      this.letracm = this.decmiles(n);
    return this.letracm;
  }

  millon(n:number){
    if (n >= 1000000 && n <2000000){
      this.sw=true;
      this.letramm = ("Un millon ").concat(this.cienmiles(n%1000000));
    }
    if (n >= 2000000 && n <10000000){
      this.sw=true;
      this.letramm = this.unidad(n/1000000).concat(" millones ").concat(this.cienmiles(n%1000000));
    }
    if (n < 1000000)
      this.letramm = this.cienmiles(n);

    return this.letramm;
  }

  decmillon(n:number){
    if (n == 10000000)
      this.letradmm = "diez millones";
    if (n > 10000000 && n <20000000){
      this.sw=true;
      this.letradmm = this.decena(n/1000000).concat("millones ").concat(this.cienmiles(n%1000000));
    }
    if (n >= 20000000 && n <100000000){
      this.sw=true;
      this.letradmm = this.decena(n/1000000).concat(" milllones ").concat(this.millon(n%1000000));
    }
    if (n < 10000000)
      this.letradmm = this.millon(n);
    return this.letradmm;
  }
/*Convierte millones*/
}
