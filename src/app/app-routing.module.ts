import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LearningNgTagComponent} from './components/learning-ng-tag/learning-ng-tag.component';
import {AppComponent} from './app.component';
import {
  LearningNgTagAndDecoratorComponent
} from './components/learning-ng-tag-and-decorator/learning-ng-tag-and-decorator.component';

const routes: Routes = [
  {path: 'learning-ng-template', component: LearningNgTagComponent},
  {path: 'learning-ng-tag-and-decorator', component: LearningNgTagAndDecoratorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
