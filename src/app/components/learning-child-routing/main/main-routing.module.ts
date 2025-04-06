import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


// not working
const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
  constructor() {
    console.log('render')
  }
}
