import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-menu',
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
        label: 'Projects',
        icon: 'pi pi-search',
        items: [ // key items inside label for generate dropdown
          {
            label: 'Learning Ng-Template',
            icon: 'pi pi-bolt',
            routerLink: '/learning-ng-template'
          },
          {
            label: 'Learning Ng-Template Focus Input/Output Decorator',
            icon: 'pi pi-server',
            routerLink: '/learning-ng-tag-and-decorator'
          },
          {
            label: 'Learning Ng-Container',
            icon: 'pi pi-pencil',
            routerLink: '/learning-ng-container'
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
        ]
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
        items: [
          {
            label: 'Contact A',
          },
          {
            label: 'Contact B',
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
      }
    ]
  }
}
