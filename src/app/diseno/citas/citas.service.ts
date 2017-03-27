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
      console.log("resolve"+resolve)
       resolve(this.retrieveCitas())
    });
  }

   buildIntervalDay(horaInicial, horaFinal, intervalo){
     let v1 = horaInicial.split(':');
     let v2 = horaFinal.split(':');
     let momentB = new Date(this.dateBuilder);
     let momentA = new Date(this.dateBuilder);
     let array = new Array();
     let hour:number;
     let minutes:number;

     momentA.setHours(v1[0],v1[1]);
     momentB.setHours(v2[0],v2[1]);

     while (momentA < momentB){
       hour =momentA.getHours();
       minutes= momentA.getMinutes();
       array.push(((hour<10)? '0'+hour: hour) +':'+((minutes<10)? '0'+minutes: minutes));
       momentA.setSeconds(intervalo); //Añado el tiempo
     }
     console.log(array)
     return array;
   }

   retrieveCitas(){
     let day = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
     let intervalos = this.buildIntervalDay('08:00', '19:30', 30*60);
     let dateComparer = new Date(this.dateBuilder);
     let container = new Array(intervalos.length-1);

     /*Recorremos los intervalos por cada dia*/
     for(var i: number = 0; i <= intervalos.length; i++) {
                container[i]=new Array(7);

                /*Recorremos los dias de la semana*/
                 for(var j: number = 0; j< 7; j++) {
                   let citasHoy = citas[day[j]];
                   if (citasHoy!=null){
                     if(citasHoy.length>0){
                       let value ="";
                       let cita = citasHoy[0];


                      // let hm  = cita.hora_inicio.split(':')
                      // dateComparer.setHours(hm[0], hm[1])
                      // console.log("date" + dateComparer)
                      //  console.log("nterval" + intervalos[i])
                       if (cita.hora_inicio == intervalos[i]){
                         let mi= intervalos[i++];
                         if (mi!=null){

                           console.log(cita)
                           cita.hora_inicio = mi;
                           console.log(cita)
                           console.log(mi)
                           //dateComparer.setSeconds(30*60);
                           //cita.hora_inicio = dateComparer.getHours()+':'+dateComparer.getMinutes();
                           if (cita.hora_inicio >=cita.hora_termino)
                               value= citasHoy.shift();
                           console.log("si" + i +j )
                            container[i][j]="as";
                         }

                       }
                      //  console.log("no")
                     }
                   }
                 }
             }
             return container;
   }
}

/*
export class Cita{
public nombre:string;
public hora_inicio:string;
public hora_termino:string;
}
*/
