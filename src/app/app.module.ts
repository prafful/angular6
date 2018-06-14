import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";



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
import { ConsumeLocalServiceComponent } from './consume/consume-local-service/consume-local-service.component';
import { LocalserviceService } from './myservices/localservice.service';
import { ConsumeLocalService2Component } from './consume/consume-local-service2/consume-local-service2.component';
import { ConsumeRemoteServiceComponent } from './consume/consume-remote-service/consume-remote-service.component';
import { RemoteserviceService } from './myservices/remoteservice.service';


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
          },
          {
            path:'localservice',
            component:ConsumeLocalServiceComponent
          },
          {
            path:'localservice2',
            component:ConsumeLocalService2Component
          },
          {
            path:'remoteservice',
            component:ConsumeRemoteServiceComponent
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
    SearchFilterPipe,
    ConsumeLocalServiceComponent,
    ConsumeLocalService2Component,
    ConsumeRemoteServiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(myRoutes),
    HttpClientModule
    
  
  ],
  providers: [LocalserviceService, RemoteserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
