import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';


/*bootstrap */
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';

import { TodoComponent } from './todo/todo.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ProgramacionComponent } from './programacion/programacion.component';
import { DiseñoComponent } from './diseño/diseño.component';
import { ModeloDatosComponent } from './modelo-datos/modelo-datos.component';
import { ZerocountsComponent } from './zerocounts/zerocounts.component';
import { NumberReaderComponent } from './number-reader/number-reader.component';
import { HorseJumpComponent } from './horse-jump/horse-jump.component';
import { CitasComponent } from './citas/citas.component';


const routes: Routes = [
  { path: '**', component: ProgramacionComponent  },
  { path: 'diseno', component: DiseñoComponent  },
  { path: 'modelodatos', component: ModeloDatosComponent  }
];

/*

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
    NavComponent,
    FooterComponent,
    MainComponent,
    ProgramacionComponent,
    DiseñoComponent,
    ModeloDatosComponent,
    HorseJumpComponent,
    ZerocountsComponent,
    NumberReaderComponent,
    CitasComponent
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
