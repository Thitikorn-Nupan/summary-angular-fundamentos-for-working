import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LearningLoadChildRoutingComponent} from './learning-load-child-routing.component';
import {SubMainA2Component} from './sub-main-a2/sub-main-a2.component';
import {SubMainB2Component} from './sub-main-b2/sub-main-b2.component';
import {SubMainC2Component} from './sub-main-c2/sub-main-c2.component';


const routes: Routes = [
  // *** /learning-load-child-routing/main
  {
    path :'main' ,
    component: LearningLoadChildRoutingComponent,
    // no refresh when gat the child path
    children : [
      {
        path :'sub-a' ,
        component: SubMainA2Component,
        children: [ // path look like => learning-child-routing/sub-a2/back
          {
            path: 'back',
            redirectTo: '/learning-load-child-routing/main'
          }
        ]
      },
      {
        path :'sub-b' ,
        component: SubMainB2Component,
        children: [ // path look like => learning-child-routing/sub-a/back
          {
            path: 'back',
            redirectTo: '/learning-load-child-routing/main'
          }
        ]
      },
      {
        path :'sub-c' ,
        component: SubMainC2Component,
        children: [ // path look like => learning-child-routing/sub-a/back
          {
            path: 'back',
            redirectTo: '/learning-load-child-routing/main'
          }
        ]
      },
    ]
  },
  // ** meaning any request as '' , / will redirect to /learning-load-child-routing/main
  // {path: '**', redirectTo: 'main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // *** .forChild(routes) for mark it multiple routing
  exports: [RouterModule]
})
export class LearningLoadChildRoutingRoutingModule {
  constructor() {
    console.log('ApplyDynamicWithLoadChildRoutingRoutingModule (Routing) initialized')
  }
}
