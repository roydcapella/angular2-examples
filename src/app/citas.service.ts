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
  private container: string[][];
  private intervalos: string[];

  constructor() {
    this.buildIntervalDay('08:00', '19:30', 30);
    this.populateContainer();
   }

   buildIntervalDay(horaInicial, horaFinal, intervalo){
  /*
  var hora1 = ("04:29:01").split(":"),
      hora2 = ("03:28:56").split(":"),
      t1 = new Date(),
      t2 = new Date();

  t1.setHours(hora1[0], hora1[1], hora1[2]);
  t2.set
  */
   }


   populateContainer(){
     var day = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
     /*Recorremos los dias de la semana*/
     for(var i: number = 0; i < 7; i++) {
                var citasByDay = citas[day[i]]
                 /*Recorremos los intervalos por cada dia*/
                 for(var j: number = 0; j< 19; j++) {
                 }
             }

   }

   getIntervalByDay(dia:number){





     //[0]:lunes,... [7]domingo

     return citas.lunes;
   }




}


export class Cita{
public nombre:string;
public hora_inicio:string;
public hora_termino:string;
}
