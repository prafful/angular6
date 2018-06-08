import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { FatherComponent } from './family/father/father.component';
import { MotherComponent } from './family/mother/mother.component';
import { SonComponent } from './family/son/son.component';
import { DaughterComponent } from './family/daughter/daughter.component';
import { TodoComponent } from './day2/todo/todo.component';


@NgModule({
  declarations: [
    AppComponent,
    FatherComponent,
    MotherComponent,
    SonComponent,
    DaughterComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'father',
        component:FatherComponent  
      },
      {
        path:'mother',
        component:MotherComponent
      },
      {
        path:'todo',
        component:TodoComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
