import { NgModule } from '@angular/core';
import { Button } from 'primeng/button';
import {RouterLink, RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../../app-routing.module';
import {Menubar} from 'primeng/menubar';
import {CommonModule} from '@angular/common';
import {TableModule} from 'primeng/table';
import {Card} from 'primeng/card';
import {FloatLabel, FloatLabelModule} from 'primeng/floatlabel';
import {IftaLabel} from 'primeng/iftalabel';
import {InputGroupAddon} from 'primeng/inputgroupaddon';
import {InputGroup} from 'primeng/inputgroup';
import {Message} from 'primeng/message';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButton} from 'primeng/radiobutton';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PickList} from 'primeng/picklist';
import {OrderList} from 'primeng/orderlist';
import {TreeTableModule} from 'primeng/treetable';
import {Tag} from 'primeng/tag';
import {Avatar} from 'primeng/avatar';
import {Listbox} from 'primeng/listbox';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {Sidebar} from 'primeng/sidebar';
import {InputIconModule} from 'primeng/inputicon';
import {IconFieldModule} from 'primeng/iconfield';
import {InputTextModule} from 'primeng/inputtext';
import {ProgressSpinner} from 'primeng/progressspinner';
import {MessagesModule} from 'primeng/messages';
import {InputTextarea} from 'primeng/inputtextarea';
import {InputNumber} from 'primeng/inputnumber';
import {InputSwitch} from 'primeng/inputswitch';
import {InputMaskModule} from 'primeng/inputmask';
import {DropdownModule} from 'primeng/dropdown';
import {WindowMaximizeIcon} from 'primeng/icons';
import {Fluid} from 'primeng/fluid';
import {Toast} from 'primeng/toast';
import {LearningLoadChildRoutingComponent} from './learning-load-child-routing.component';
import {LearningLoadChildRoutingRoutingModule} from './learning-load-child-routing-routing.module';
import {SubMainA2Component} from './sub-main-a2/sub-main-a2.component';
import {SubMainB2Component} from './sub-main-b2/sub-main-b2.component';

// working as same AppModule
@NgModule({
  declarations : [
    LearningLoadChildRoutingComponent,
    SubMainA2Component,
    SubMainB2Component,
  ],
  imports: [
    // All service api should import here
    // now all components on declarations : [] can work with service api
    CommonModule, // ***
    LearningLoadChildRoutingRoutingModule,
    Menubar, CommonModule, TableModule, Button, Card, FloatLabel, IftaLabel,
    InputGroupAddon, InputGroup, Message, CheckboxModule, RadioButton, FormsModule,
    PickList, OrderList, TreeTableModule, Tag, Avatar, Listbox, ScrollPanelModule, Sidebar,
    ReactiveFormsModule, FloatLabelModule, InputIconModule, IconFieldModule, InputTextModule,
    CheckboxModule, ProgressSpinner, MessagesModule, InputTextarea, InputNumber, InputSwitch,
    InputMaskModule, DropdownModule, WindowMaximizeIcon, Fluid, Toast,
  ],

})
export class LearningLoadChildRoutingModule {
  constructor() {
    console.log('LearningLoadChildRoutingModule class is working')
  }
}
