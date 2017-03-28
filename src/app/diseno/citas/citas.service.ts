import { Injectable } from '@angular/core';

let citas = {
lunes: [
{nombre: 'Daniel', hora_inicio: '08:00', hora_termino: '09:00'},
{nombre: 'Daniel', hora_inicio: '09:30', hora_termino: '11:00'},
{nombre: 'Daniel', hora_inicio: '15:00', hora_termino: '16:00'},
{nombre: 'Daniel', hora_inicio: '17:00', hora_termino: '19:30'}
],
martes: [
{nombre: 'Daniel', hora_inicio: '08:00', hora_termino: '09:00'},
{nombre: 'Daniel', hora_inicio: '11:30', hora_termino: '12:00'},
{nombre: 'Daniel', hora_inicio: '15:00', hora_termino: '16:00'},
{nombre: 'Daniel', hora_inicio: '17:00', hora_termino: '19:30'}
],
miercoles: [
{nombre: 'Daniel', hora_inicio: '08:00', hora_termino: '09:00'},
{nombre: 'Daniel', hora_inicio: '10:30', hora_termino: '12:00'},
{nombre: 'Daniel', hora_inicio: '15:00', hora_termino: '16:00'},
{nombre: 'Daniel', hora_inicio: '17:00', hora_termino: '19:30'}
],
jueves: [
{nombre: 'Daniel', hora_inicio: '08:00', hora_termino: '09:00'},
{nombre: 'Daniel', hora_inicio: '09:30', hora_termino: '12:00'},
{nombre: 'Daniel', hora_inicio: '15:00', hora_termino: '16:00'},
{nombre: 'Daniel', hora_inicio: '17:00', hora_termino: '19:30'}
],
viernes: [

{nombre: 'Daniel', hora_inicio: '08:00', hora_termino: '09:00'},
{nombre: 'Daniel', hora_inicio: '09:30', hora_termino: '12:00'},
{nombre: 'Daniel', hora_inicio: '15:00', hora_termino: '16:00'},
{nombre: 'Daniel', hora_inicio: '17:00', hora_termino: '19:30'}
],
};

@Injectable()
export class CitasService {

  private dateBuilder : Date;
  constructor() {
    //function(a, b){return a.year - b.year}
//ordenar array
    this.dateBuilder= new Date();
   }

  get(){
    return new Promise(resolve =>{
      console.log("Citas:")
      console.log(citas)
       resolve(citas);
    });
  }

  getIntervalos(horaInicial, horaFinal, intervalo){
    return new Promise(resolve =>{
     let array = new Array();
     let v1 = horaInicial.split(':');
     let v2 = horaFinal.split(':');
     let momentB = new Date(this.dateBuilder);
     let momentA = new Date(this.dateBuilder);
     let hour:number;
     let minutes:number;

     momentA.setHours(v1[0],v1[1]);
     momentB.setHours(v2[0],v2[1]);

     while (momentA < momentB){
       hour =momentA.getHours();
       minutes= momentA.getMinutes();
       array.push(((hour<10)? '0'+hour: hour) +':'+((minutes<10)? '0'+minutes: minutes));
       momentA.setSeconds(30*60); //Añado el tiempo
     }
     console.log("Intervalos:")
     console.log(array)
     resolve(array);
   });
  }

}
/*
export class Cita{
public nombre:string;
public hora_inicio:string;
public hora_termino:string;
}
*/
