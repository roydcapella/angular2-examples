import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diseno',
  templateUrl: './diseno.component.html',
  styleUrls: ['./diseno.component.scss']
})
export class DisenoComponent implements OnInit {
 private currentView:string;
 private title;

 constructor() {
  this.showNow("citas");
}

  ngOnInit() {
  }

  showNow(ver: string){
    switch(ver){
      case "citas" :
        this.title= "Control de citas";
        break;
      case "colegio" :
          this.title= "Diseno Colegio";
          break;
      case "cartas" :
            this.title= "Mazos de Cartas";
            break;
      default:
          this.title="";
            break;
    }
    this.currentView=ver;
  }


}
