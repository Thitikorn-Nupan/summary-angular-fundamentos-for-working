import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LearningNgTagComponent} from './components/learning-ng-tag/learning-ng-tag.component';
import {AppComponent} from './app.component';
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

const routes: Routes = [
  {path: 'learning-ng-template', component: LearningNgTagComponent},
  {path: 'learning-ng-tag-and-decorator', component: LearningNgTagAndDecoratorComponent},
  {path: 'learning-ng-container', component: LearningNgContainerTagComponent},
  {path: 'learning-ng-content', component: LearningNgContentComponent},
  {path: 'learning-view-child', component: LearningViewChildComponent},
  {path: 'learning-ng-container-and-p-tree-table', component: LearningNgContainerAndPTreeTableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
