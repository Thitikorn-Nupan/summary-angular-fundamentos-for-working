import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-learning-load-child-routing',
  standalone: false,
  templateUrl: './apply-dynamic-with-load-child-routing.component.html',
  styleUrl: './apply-dynamic-with-load-child-routing.component.css'
})
export class ApplyDynamicWithLoadChildRoutingComponent implements OnInit {

protected keyRenderTemplate : string = ''

  constructor(private router: ActivatedRoute) {
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
    // will refresh when gat the child path
    this.router.queryParams.subscribe(params => {
      // console.log("crud ", params)
      this.keyRenderTemplate = params['crud']
    })
  }
}
