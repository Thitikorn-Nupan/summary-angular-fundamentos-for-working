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
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [ // key item for generate dropdown
          {
            label: 'Project A',
            icon: 'pi pi-bolt'
          },
          {
            label: 'Project B',
            icon: 'pi pi-server'
          },
          {
            label: 'Project C',
            icon: 'pi pi-pencil'
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
