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
  }

  ngOnInit(): void {
    // will refresh when gat the child path
    this.router.queryParams.subscribe(params => {
      // console.log("crud ", params)
      this.keyRenderTemplate = params['crud']
    })
  }
}
