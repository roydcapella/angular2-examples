import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programacion',
  templateUrl: './programacion.component.html',
  styleUrls: ['./programacion.component.scss']
})
export class ProgramacionComponent implements OnInit {
  private currentView:string;
  private title;
  constructor() {
  this.showNow("contador");
}

  ngOnInit() {
  }

  showNow(ver: string){
    switch(ver){
      case "contador" :
        this.title= "Contador de ceros al final del factorial";
        break;
      case "saltarin" :
          this.title= "Pasos del caballo saltarin";
          break;
      case "lector" :
            this.title= "Lector de numeros enteros";
            break;
      default:
          this.title="";
            break;
    }
    this.currentView=ver;
  }
}
