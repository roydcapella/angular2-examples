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

  constructor() {
    this.populateContainer();
   }

   populateContainer(){
     for(var i: number = 0; i < 7; i++) {
                var citasByDay = this.getCitasByDay(i);
                 this.container[i] = [];
                 for(var j: number = 0; j< 19; j++) {

                     this.container[i][j] = new Cita();
                 }
             }

   }

   getCitasByDay(dia:number){
     return citas.lunes;
   }

}


export class Cita{
public nombre:string;
public hora_inicio:string;
public hora_termino:string;
}
