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

const routes: Routes = [
  {path: 'learning-ng-template', component: LearningNgTagComponent},
  {path: 'learning-ng-tag-and-decorator', component: LearningNgTagAndDecoratorComponent},
  {path: 'learning-ng-container', component: LearningNgContainerTagComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
