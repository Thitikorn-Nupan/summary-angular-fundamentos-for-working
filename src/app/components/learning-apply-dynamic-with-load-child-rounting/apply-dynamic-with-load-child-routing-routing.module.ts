import {NgModule} from '@angular/core';
import {ActivatedRoute, Router, RouterModule, Routes} from '@angular/router';
import {ApplyDynamicWithLoadChildRoutingComponent} from './apply-dynamic-with-load-child-routing.component';


const routes: Routes = [
  // *** /learning-apply-dynamic-with-load-child-routing/
  {
    path: '',
    component: ApplyDynamicWithLoadChildRoutingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // *** .forChild(routes) for mark it multiple routing
  exports: [RouterModule]
})
export class ApplyDynamicWithLoadChildRoutingRoutingModule {
  constructor() {
    console.log('ApplyDynamicWithLoadChildRoutingRoutingModule (Routing) initialized')
  }
}
