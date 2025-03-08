import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LearningNgTagComponent} from './components/learning-ng-tag/learning-ng-tag.component';

const routes: Routes = [
  {path: 'leaning-ag-tag', component: LearningNgTagComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
