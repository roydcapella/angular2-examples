import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

import { NumberReaderService } from './number-reader.service';


@Component({
  selector: 'app-number-reader',
  templateUrl: './number-reader.component.html',
  styleUrls: ['./number-reader.component.scss'],
  providers: [NumberReaderService]
})
export class NumberReaderComponent implements OnInit {
  private response: string;
  private numero: number;
  private code:string;

  private frmConvert2Text = this.fb.group({
    numberValue: ["", Validators.required]
  });

  constructor(private fb: FormBuilder, private numberReaderService:NumberReaderService) {
    this.response = "";
    this.code="";
  }

  ngOnInit() {
  }
    /*impide que se ingresen otros caracteres que no sean numeros */
    onlyNumber(e) {
      return (e.keyCode >= 48 && e.keyCode <= 57);
    }

      loadCode(){
        this.code += '<br><b> Transformador </b><br> ' + this.numberReaderService.transform;
        this.code += '<br><b>Unidades: </b><br> ' + this.numberReaderService.unidad;
        this.code += '<br><b>Decena: </b><br> ' + this.numberReaderService.decena;
        this.code += '<br><b>Centena: </b><br> ' + this.numberReaderService.centena;
        this.code += '<br><b>Miles: </b><br> ' + this.numberReaderService.miles;
        this.code += '<br><b>Millones: </b><br> ' + this.numberReaderService.millon;
        this.code += '<br><b>Decenas de miles: </b><br> ' + this.numberReaderService.decmiles;
        this.code += '<br><b>Decenas de millon: </b><br> ' + this.numberReaderService.decmillon;
      }

  doConvert2Text(event) {
    let n:number=this.frmConvert2Text.value.numberValue;
    if (n>0 && n<10000000)
    this.response = this.numberReaderService
                    .transform(n);
     else
    this.response="Valor fuera de rango. Max:10000000, Min:0"
  }






}
