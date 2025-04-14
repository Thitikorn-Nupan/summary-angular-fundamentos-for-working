import { NgModule } from '@angular/core';
import { Button } from 'primeng/button';
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
import {DynamicFormGroupComponent} from '../dom-components/dynamic-form-group/dynamic-form-group.component';
import {Select} from 'primeng/select';
import {TestUserFormComponent} from './test-user-form/test-user-form.component';
import {TestRobotFormComponent} from './test-robot-form/test-robot-form.component';
import {DataTreeTableComponent} from '../dom-components/data-tree-table/data-tree-table.component';
import {TestUserTableComponent} from './test-user-table/test-user-table.component';
import {TestRobotTableComponent} from './test-robot-table/test-robot-table.component';
import {
  DynamicFormGroupWithKeyFilterComponent
} from '../dom-components/dynamic-form-group-with-key-filter/dynamic-form-group-with-key-filter.component';
import {KeyFilter} from 'primeng/keyfilter';
import { PasswordModule } from 'primeng/password';
import {
  TestUserFormWithKeyFilterComponent
} from './test-user-form-with-key-filter/test-user-form-with-key-filter.component';
// working as same AppModule
@NgModule({
    declarations: [
        LearningLoadChildRoutingComponent,
        SubMainA2Component,
        SubMainB2Component,
        /*
        DynamicFormGroupComponent,
        DataTreeTableComponent,
        TestUserFormComponent,
        TestRobotFormComponent,
        TestRobotTableComponent,
        TestUserTableComponent,
        */
        DynamicFormGroupWithKeyFilterComponent,
        TestUserFormWithKeyFilterComponent,

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
    InputMaskModule, DropdownModule, WindowMaximizeIcon, Fluid, Toast, Select, KeyFilter,
    PasswordModule
  ],
})
export class LearningLoadChildRoutingModule {
  constructor() {
    console.log('ApplyDynamicWithLoadChildRoutingModule class is working')
  }
}
