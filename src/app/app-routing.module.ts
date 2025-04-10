import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LearningNgTagComponent} from './components/learning-ng-tag/learning-ng-tag.component';
import {
  LearningNgTagAndDecoratorComponent
} from './components/learning-ng-tag-and-decorator/learning-ng-tag-and-decorator.component';
import {
  LearningNgContainerTagComponent
} from './components/learning-ng-container-tag/learning-ng-container-tag.component';
import {LearningNgContentComponent} from './components/learning-ng-content/learning-ng-content.component';
import {LearningViewChildComponent} from './components/learning-view-child/learning-view-child.component';
import {
  LearningNgContainerAndPTreeTableComponent
} from './components/learning-ng-container-and-p-tree-table/learning-ng-container-and-p-tree-table.component';
import {LearningFormGroupsComponent} from './components/learning-form-groups/learning-form-groups.component';
import {
  LearningFormGroupsAndBindingAttributesComponent
} from './components/learning-form-groups-and-binding-attributes/learning-form-groups-and-binding-attributes.component';
import {
  LearningFormGroupsAndBindingAttributesAndNgTagComponent
} from './components/learning-form-groups-and-binding-attributes-and-ng-tag/learning-form-groups-and-binding-attributes-and-ng-tag.component';
import {MainComponent} from './components/learning-child-routing/main/main.component';
import {SubMainAComponent} from './components/learning-child-routing/main/sub-main-a/sub-main-a.component';
import {SubMainBComponent} from './components/learning-child-routing/main/sub-main-b/sub-main-b.component';
import {SubMainCComponent} from './components/learning-child-routing/main/sub-main-c/sub-main-c.component';
import {AppComponent} from './app.component';
import {
  LearningLoadChildRoutingModule
} from './components/learning-load-child-routing/learning-load-child-routing.module';

const routes: Routes = [
  // *** One url renders one component
  {path: 'learning-ng-template', component: LearningNgTagComponent},
  {path: 'learning-ng-tag-and-decorator', component: LearningNgTagAndDecoratorComponent},
  {path: 'learning-ng-container', component: LearningNgContainerTagComponent},
  {path: 'learning-ng-content', component: LearningNgContentComponent},
  {path: 'learning-view-child', component: LearningViewChildComponent},
  {path: 'learning-ng-container-and-p-tree-table', component: LearningNgContainerAndPTreeTableComponent},
  {path: 'learning-form-groups', component: LearningFormGroupsComponent},
  {path: 'learning-form-groups-and-binding-attributes ', component: LearningFormGroupsAndBindingAttributesComponent},
  {
    path: 'learning-form-groups-and-binding-attributes-and-ng-tag',
    component: LearningFormGroupsAndBindingAttributesAndNgTagComponent
  },
  {
    // *** Note this way all children have to put components on declarations (at AppModule) : [...] then you can use some primeng
    // *** One url renders many components
    // *** Use Children :
    // all children component will render on MainComponent component
    // it renders by <router-outlet></router-outlet>
    path: 'learning-child-routing',
    component: MainComponent,
    children: [
      {
        path: 'sub-a',
        component: SubMainAComponent,
        children: [ // path look like => learning-child-routing/sub-a/back
          {
            path: 'back',
            redirectTo: '/learning-child-routing'
          }
        ]
      },
      {
        path: 'sub-b',
        component: SubMainBComponent,
        children: [
          {
            path: 'back',
            redirectTo: '/learning-child-routing'
          }
        ]
      },
      {
        path: 'sub-c',
        component: SubMainCComponent,
        children: [
          {
            path: 'back',
            redirectTo: '/learning-child-routing'
          }
        ]
      }
    ], // end children : []
  },
  {
  // *** Note this way all children have to put components on declarations (at LearningLoadChildRoutingModule) : [...] then you can use some primeng
  // *** Note when you add loadChildren you have to restart angular
  // *** Use LoadChildren :
  // If you use () => <routing-module>, *** angular will not create a separate js bundle,
  // but the routes table would be kept separate. The result is better code readability and maintainability.
  // *** when you req /learning-load-child-routing it won't load your child component
  // *** util you req /learning-load-child-routing/main
    path: 'learning-load-child-routing',
    children: [
      {
        path: '',
        loadChildren: () => import("./components/learning-load-child-routing/learning-load-child-routing.module").then((m) => m.LearningLoadChildRoutingModule)
      }
    ] // end children : []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {
    console.log('AppRoutingModule (Routing) initialized')
  }
}
