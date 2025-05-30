import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'menu-component',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  protected items: MenuItem[] | undefined; // this MenuItem class for set menu

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        // *** you can set routerLink on here
        routerLink: '/'
      },
      {
        label: 'Projects (Ng-*)',
        icon: 'pi pi-search',
        items: [ // key items inside label for generate dropdown
          {
            label: 'Learning Ng-Template',
            icon: 'pi pi-pencil',
            routerLink: '/learning-ng-template'
          },
          {
            label: 'Learning Ng-Template Focus Input/Output Decorator',
            icon: 'pi pi-pencil',
            routerLink: '/learning-ng-tag-and-decorator'
          },
          {
            label: 'Learning Ng-Container',
            icon: 'pi pi-pencil',
            routerLink: '/learning-ng-container'
          },
          {
            label: 'Learning Ng-Container Focus Dynamic P Tree Table',
            icon: 'pi pi-pencil',
            routerLink: '/learning-ng-container-and-p-tree-table'
          },
          {
            label: 'Learning Ng-Content',
            icon: 'pi pi-pencil',
            routerLink: '/learning-ng-content'
          },
          {
            label: 'Learning ViewChild',
            icon: 'pi pi-pencil',
            routerLink: '/learning-view-child'
          }
          ,
          {
            label: 'Learning Child Routing',
            icon: 'pi pi-pencil',
            routerLink: '/learning-child-routing'
          },
          {
            label: 'Learning Load Child Routing',
            icon: 'pi pi-pencil',
            routerLink: '/learning-load-child-routing', // no render anything
            items: [
              {
                label: 'main', // *** render child routes
                icon: 'pi pi-pencil',
                routerLink: '/learning-load-child-routing/main',
              }
            ]
          },
          {
            label: 'Learning Load Child Routing (Apply)',
            icon: 'pi pi-pencil',
            routerLink: '/learning-apply-dynamic-with-load-child-routing', // no render anything
            items: [
              {
                label: 'Crud user',
                icon: 'pi pi-pencil',
                routerLink: '/learning-apply-dynamic-with-load-child-routing',
                queryParams:{'crud':'user'} // req param on url
              },
              {
                label: 'Crud user with key filter',
                icon: 'pi pi-pencil',
                routerLink: '/learning-apply-dynamic-with-load-child-routing',
                queryParams:{'crud':'user-with-key-filter'}
              }
              ,
              {
                label: 'Crud todo with key filter (API)',
                icon: 'pi pi-pencil',
                routerLink: '/learning-apply-dynamic-with-load-child-routing',
                queryParams:{'crud':'todo-with-key-filter'}
              }
            ]
          } //
        ]
      },
      {
        label: 'Projects (FormGroup)',
        icon: 'pi pi-search',
        items: [
          {
            label: 'Learning FormGroup',
            icon: 'pi pi-pencil',
            routerLink: '/learning-form-groups'
          },
          {
            label: 'Learning FormGroup + Binding Attribute',
            icon: 'pi pi-pencil',
            routerLink: '/learning-form-groups-and-binding-attributes '
          },
          {
            label: 'Learning FormGroup + Binding Attribute + Ng-*',
            icon: 'pi pi-pencil',
            routerLink: '/learning-form-groups-and-binding-attributes-and-ng-tag'
          },
          {
            label: 'Contact C',
            items : [
              {
                label: 'Contact C1',
              },
              {
                label: 'Contact C2',
              }
            ]
          }
        ]
      },
      {
        label: 'Projects (apply environment.ts)',
        icon: 'pi pi-search',
        items: [ // key items inside label for generate dropdown
          {
            label: 'Learning Environment With API Service',
            icon: 'pi pi-pencil',
            routerLink: '/learning-env-with-api-service'
          }
          ]
      }
    ]
  }
}
