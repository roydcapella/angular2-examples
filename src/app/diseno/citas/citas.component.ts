/*import components*/
import { Component, OnInit } from '@angular/core';

/*import services*/
import { CitasService } from './citas.service';


let citas2 = {
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


@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.scss'],
  providers: [CitasService]
})

export class CitasComponent implements OnInit {
  private tablaCitas: string = "";
  private contenido:string="";
  private citas;
  private intervalos;

  constructor(private citasService: CitasService) {

  }


  ngOnInit() {
    this.getCitas();
    //this.tablaCitas = this.renderCitas();
  }

getIntervalos(){
  return this.citasService.getIntervalos("08:00", "19:30", 30).then(intervalos => {
    this.intervalos = intervalos;
  });
}
/*
return this.citasService.getIntervalos("08:00", "19:30", 30).then(intervalos => {
  this.intervalos = intervalos;

});
*/
  getCitas() {

    return this.citasService.get().then(citas => {
      return this.citasService.getIntervalos("08:00", "19:30", 30).then(intervalos => {
        this.intervalos = intervalos;
        this.citas = citas;
        this.contenido=this.renderCitas();
      });
    });
  }


  renderCitas() {
    let nombreColumna: string;
    let listColumnas = ["hora", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo", "hora"];
    let html = "<div class='row table'>";
    for (let columna: number = 0; columna < 9; columna++) {
      nombreColumna = listColumnas[columna];
      if (columna == 0 || columna == 8) {
        html += "<div class='col-md-1 columnaHora' id='columna" + columna + "'>";
        html += "<h4 class='title'>" + nombreColumna + "</h4>";

        for (let intervalo = 0; intervalo < this.intervalos.length; intervalo++) {
          html += "<div class='bloque hora' >"
          html += "<span class='hora'>" + this.intervalos[intervalo] + "</span>";
          html += "</div>";
        }
        html += "</div>";
      } else {
        html += "<div class='col-md-1 columnaDia' id='columna" + columna + "'>";
        html += "<h4 class='title'>" + nombreColumna + "</h4>";

        let citasDia = this.citas[nombreColumna];
        console.log(this.citas)


        for (let hora = 0; hora <= this.intervalos.length; hora++) {
          if (citasDia!=null && citasDia.length > 0) {
            let citaActual = citasDia[0];
            if (citaActual != null) {
              if (citaActual.hora_inicio == this.intervalos[hora]) {
                citaActual.hora_inicio = citaActual.hora_inicio + 30; ///funcion que sume 30 a hora_inicio
                if (citaActual.hora_termino <= citaActual.hora_inicio) {
                  html += "<div class='bloque cita' >"
                  html += "<span class='cita'>" + citaActual.nombre + "</span>";
                  html += "</div>";
                  citasDia.shift();
                }
              }
            }
          } else {
            html += "<div class='bloque bloque-vacio'><div>";
          }
        }
        html += "</div>";
      }
    }
    html += "</div>"; //cierra tabla-
    console.log(html)
    return html;
  }
}
