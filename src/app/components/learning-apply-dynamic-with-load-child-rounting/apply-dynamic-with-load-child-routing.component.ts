import {Component, NgZone, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastDynamicOption} from '../../models/form/toast-dynamic-option';
import {Button} from 'primeng/button';
import {WebStorageService} from '../../service/web-storage-service';

@Component({
  selector: 'app-learning-load-child-routing',
  standalone: false,
  templateUrl: './apply-dynamic-with-load-child-routing.component.html',
  styleUrl: './apply-dynamic-with-load-child-routing.component.css'
})
export class ApplyDynamicWithLoadChildRoutingComponent implements OnInit {

  protected keyRenderTemplate: string = ''
  protected toastDynamicOptions: ToastDynamicOption = new ToastDynamicOption(
    'confirm-dynamic-popup',
    'secondary',
    'Confirm message',
    'Are you sure to delete?',
    true,
    'fa-solid fa-circle-info fa-xl',
    {'color': '#63E6BE'}
  )

  constructor(private activatedRoute: ActivatedRoute,private webStorageService : WebStorageService,private  router: Router,private ngZone: NgZone ) {
    console.log('ApplyDynamicWithLoadChildRoutingComponent initialized')
    /*
       *** nullish coalescing
    *  (?? operation) provide a concise way to handle null or undefined
    *  When used, the double question mark operator checks if the value
    *  on the left-hand side is null or un
       const defaultValue = "Default Value";
       const value = null;
       const result = value ?? defaultValue;
       result is "Default Value"
    *  (??) in TypeScript allows for chaining multiple expressions
       const firstName = null;
       const lastName = undefined;
       const fullName = firstName ?? lastName ?? 'John Doe';
       fullName is 'John Doe'
    */
  }

  ngOnInit(): void {
    this.validateLoginWithoutGuardRouting();
  }

  // *** Basic validate without guard routing
  private validateLoginWithoutGuardRouting() {
    if (this.webStorageService.getLocal('login') === true && this.webStorageService.getLocal('username') === 'Admin') {
      // will refresh when gat the child path
      this.activatedRoute.queryParams.subscribe(params => {
        // console.log("crud ", params)
        this.keyRenderTemplate = params['crud']
      })
    } else {
      this.ngZone.run(() => this.router.navigateByUrl('login')) // go to path
    }
  }

  protected setToastDynamicStatus($event : {status: boolean,detail : string}) {
    console.log($event)
  }


}
