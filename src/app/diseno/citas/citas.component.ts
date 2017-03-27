import { Component, OnInit } from '@angular/core';

import { CitasService } from './citas.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.scss'],
  providers: [CitasService]
})

export class CitasComponent implements OnInit {
  private citas;

  constructor(private citasService: CitasService) { }

  ngOnInit() {
    this.renderCitas()
  }

  renderCitas(){
    let nombreColumna;
    let intervalos= this.getIntervalos("08:00", "19:30",30);
    let html = "<div class='row table'>";
    for(let columna:number=0; columna <=9 ; columna ++){
      nombreColumna= this.getNombreColumna(0);
      if (columna==0||columna == 9){
        html += "<div class='col-md-1 columnaHora' id='columna"+columna+"'>";
        html += "<h3 class='title'>"+ nombreColumna +"</h3>";
        for (let intervalo = 0;intervalo<= intervalos.length; intervalo++){
          html += "<div class='bloque hora' >"
          html += "<span class='hora'>"+ intervalos[intervalo] + "</span>";
          html += "</div>";
        }
        html="</div>";
      }else{
        html += "<div class='col-md-1 columnaDia' id='columna"+columna+"'>";
        html += "<h3 class='title'>"+ nombreColumna +"</h3>";

        let citasDia = citas[nombreColumna];

        if (citasDia.length>0){

          for (let hora=0; hora<= intervalos.length; hora++){
            citaActual = citasDia[0];
            if (citaActual !=null){
              if (citasActual.hora_inicio== intervalos[hora]){
                citaActual.hora_inicio = citaActual.hora_inicio+30; ///funcion que sume 30 a hora_inicio
                if (citaActual.hora_termino <= citaActual.hora_inicio){
                  html += "<div class='bloque cita' >"
                  html += "<span class='cita'>"+ citaActual.nombre + "</span>";
                  html += "</div>";
                  citasDia.shift();
                }
              }
            }
          }
        }else{
          html="<div class='sin-contenido'><div>";
        }


      }


      }



    }



    return this.citasService.get().then(citas => {


      this.citas = citas;

    });
  }


}
