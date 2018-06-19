import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppComponent} from './app.component';
import {FatherComponent} from './family/father/father.component';
import {MotherComponent} from './family/mother/mother.component';
import {SonComponent} from './family/son/son.component';
import {DaughterComponent} from './family/daughter/daughter.component';
import {TodoComponent} from './day2/todo/todo.component';

import {SortPipePipe} from './my-pipes/sort-pipe.pipe';
import {TemplateformComponent} from './forms/template/templateform/templateform.component';
import {ModelformComponent} from './forms/template/modelform/modelform.component';
import {AutoSearchComponent} from './search/auto-search/auto-search.component';
import {SearchFilterPipe} from './my-pipes/search-filter.pipe';
import {ConsumeLocalServiceComponent} from './consume/consume-local-service/consume-local-service.component';
import {LocalserviceService} from './myservices/localservice.service';
import {ConsumeLocalService2Component} from './consume/consume-local-service2/consume-local-service2.component';
import {ConsumeRemoteServiceComponent} from './consume/consume-remote-service/consume-remote-service.component';
import {RemoteserviceService} from './myservices/remoteservice.service';
import {BasicanimationComponent} from './animation/basicanimation/basicanimation.component';
import {ParentComponent} from './parent-child/parent/parent.component';
import {ChildComponent} from './parent-child/child/child.component';
import {NotfoundComponent} from './notfound/notfound/notfound.component';
import {NuclearComponent} from './family/nuclear/nuclear.component';
import { InbuiltdirectiveComponent } from './directive/inbuiltdirective/inbuiltdirective.component';

const myRoutes : Routes = [
  {
    path: '',
    redirectTo: 'todo',
    pathMatch: 'full'
  }, {
    path: 'nuclear',
    component: NuclearComponent,
    children: [
      {
        path: '',
        redirectTo: 'father',
        pathMatch: 'full'
      },
      {
        path: 'father',
        component: FatherComponent
      }, {
        path: 'mother',
        component: MotherComponent
      }, {
        path: 'son',
        component: SonComponent
      }, {
        path: 'daughter',
        component: DaughterComponent
      }
    ]
  }, {
    path: 'todo',
    component: TodoComponent
  }, {
    path: 'template',
    component: TemplateformComponent
  }, {
    path: 'model',
    component: ModelformComponent
  }, {
    path: 'searchfilter',
    component: AutoSearchComponent
  }, {
    path: 'localservice',
    component: ConsumeLocalServiceComponent
  }, {
    path: 'localservice2',
    component: ConsumeLocalService2Component
  }, {
    path: 'remoteservice',
    component: ConsumeRemoteServiceComponent
  }, {
    path: 'animation',
    component: BasicanimationComponent
  }, {
    path: 'eventbinding',
    component: ParentComponent
  }, {
    path: 'directive',
    component: InbuiltdirectiveComponent
  },{
    path: '**',
    component: NotfoundComponent
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
    SortPipePipe,
    TemplateformComponent,
    ModelformComponent,
    AutoSearchComponent,
    SearchFilterPipe,
    ConsumeLocalServiceComponent,
    ConsumeLocalService2Component,
    ConsumeRemoteServiceComponent,
    BasicanimationComponent,
    ParentComponent,
    ChildComponent,
    NotfoundComponent,
    NuclearComponent,
    InbuiltdirectiveComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(myRoutes),
    HttpClientModule,
    BrowserAnimationsModule

  ],
  providers: [
    LocalserviceService, RemoteserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}