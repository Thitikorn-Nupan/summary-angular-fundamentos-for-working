import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {path: 'learning-ng-template', component: LearningNgTagComponent},
  {path: 'learning-ng-tag-and-decorator', component: LearningNgTagAndDecoratorComponent},
  {path: 'learning-ng-container', component: LearningNgContainerTagComponent},
  {path: 'learning-ng-content', component: LearningNgContentComponent},
  {path: 'learning-view-child', component: LearningViewChildComponent},
  {path: 'learning-ng-container-and-p-tree-table', component: LearningNgContainerAndPTreeTableComponent},
  {path: 'learning-form-groups', component: LearningFormGroupsComponent},
  {path: 'learning-form-groups-and-binding-attributes ', component: LearningFormGroupsAndBindingAttributesComponent},
  {path: 'learning-form-groups-and-binding-attributes-and-ng-tag', component: LearningFormGroupsAndBindingAttributesAndNgTagComponent},
  {
    // *** The first way
    // all children component will render on MainComponent component
    // it renders by <router-outlet></router-outlet>
    path: 'learning-child-routing',
    component: MainComponent,
    children: [
      {
        path: 'sub-a',
        component: SubMainAComponent,
        children : [ // path look like => learning-child-routing/sub-a/back
          {
            path : 'back' ,
            redirectTo : '/learning-child-routing'
          }
        ]
      },
      {
        path: 'sub-b',
        component: SubMainBComponent,
        children : [ // path look like => learning-child-routing/sub-b/back
          {
            path : 'back' ,
            redirectTo : '/learning-child-routing'
          }
        ]
      },
      {
        path: 'sub-c',
        component: SubMainCComponent,
        children : [ // path look like => learning-child-routing/sub-c/back
          {
            path : 'back' ,
            redirectTo : '/learning-child-routing'
          }
        ]
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
