import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgbProgressbar } from "@ng-bootstrap/ng-bootstrap";


import { AppComponent } from './app.component';
import { FatherComponent } from './family/father/father.component';
import { MotherComponent } from './family/mother/mother.component';
import { SonComponent } from './family/son/son.component';
import { DaughterComponent } from './family/daughter/daughter.component';
import { TodoComponent } from './day2/todo/todo.component';
import { FamilyComponent } from './family/family/family.component';
import { SortPipePipe } from './my-pipes/sort-pipe.pipe';
import { TemplateformComponent } from './forms/template/templateform/templateform.component';
import { ModelformComponent } from './forms/template/modelform/modelform.component';
import { AutoSearchComponent } from './search/auto-search/auto-search.component';
import { SearchFilterPipe } from './my-pipes/search-filter.pipe';


const myRoutes: Routes = [
  
      {
        path:'father',
        component:FatherComponent
      },
      
        {
          path:'mother',
          component:MotherComponent
        },
        {
          path:'son',
          component:SonComponent
        },
        {
        path:'daughter',
        component:DaughterComponent
        },
        {
          path:'todo',
          component:TodoComponent
          },
          {
            path:'template',
            component:TemplateformComponent
          },
          {
            path:'model',
            component:ModelformComponent
          },
          {
             path:'searchfilter',
             component:AutoSearchComponent 
          }
]

@NgModule({
  declarations: [
    AppComponent,
    FatherComponent,
    MotherComponent,
    SonComponent,
    DaughterComponent,
    TodoComponent,
    FamilyComponent,
    SortPipePipe,
    TemplateformComponent,
    ModelformComponent,
    AutoSearchComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(myRoutes),
    NgbModule.forRoot()
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
