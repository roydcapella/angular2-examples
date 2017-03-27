import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';


/*bootstrap */
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AppComponent } from './app.component';

/*Template*/
import { TodoComponent } from './todo/todo.component';
import { NavComponent } from './template/nav/nav.component';
import { FooterComponent } from './template/footer/footer.component';
import { MainComponent } from './template/main/main.component';


/*Ejercicios programacion*/
import { ProgramacionComponent } from './programacion/programacion.component';
import { ZerocountsComponent } from './programacion/zerocounts/zerocounts.component';
import { NumberReaderComponent } from './programacion/number-reader/number-reader.component';
import { HorseJumpComponent } from './programacion/horse-jump/horse-jump.component';

/*Ejercicios Modelo datos*/
import { ModeloDatosComponent } from './modelo-datos/modelo-datos.component';

/*Ejercicios Dise;o*/
import { CitasComponent } from './diseno/citas/citas.component';
import { DisenoComponent } from './diseno/diseno.component';

const routes: Routes = [
  { path: 'diseno', component: DisenoComponent  },
  { path: 'modelado', component: ModeloDatosComponent  },
  { path: '**', component: ProgramacionComponent  }
];

/*
DiseñoComponent,
const routes: Routes = [
  { path: ':status', component: TodoComponent },
  { path: '/programacion', component: ProgramacionComponent  },
  { path: '/diseno', component: DiseñoComponent  },
  { path: '/modelodatos', component: ModeloDatosComponent  },
];
*/

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    DisenoComponent,
    NavComponent,
    FooterComponent,
    MainComponent,
    ProgramacionComponent,
    ModeloDatosComponent,
    HorseJumpComponent,
    ZerocountsComponent,
    NumberReaderComponent,
    CitasComponent,
    DisenoComponent
  ],
  /*routes and modules*/
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AlertModule.forRoot()
  ],
  providers: [],
  /*components to start*/
  bootstrap: [AppComponent]
})
export class AppModule { }
