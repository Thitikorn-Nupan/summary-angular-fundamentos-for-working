import {NgModule} from '@angular/core';
import {Button} from 'primeng/button';
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
import {ApplyDynamicWithLoadChildRoutingComponent} from './apply-dynamic-with-load-child-routing.component';
import {ApplyDynamicWithLoadChildRoutingRoutingModule} from './apply-dynamic-with-load-child-routing-routing.module';
import {Select} from 'primeng/select';
import {CrudUserComponent} from './crud-user/crud-user.component';
import {DynamicFormGroupComponent} from '../dom-components/dynamic-form-group/dynamic-form-group.component';
import {DataTreeTableComponent} from '../dom-components/data-tree-table/data-tree-table.component';
import {CrudUserWithKeyFilterComponent} from './crud-user-with-key-filter/crud-user-with-key-filter.component';
import {LearningLoadChildRoutingModule} from '../learning-load-child-routing/learning-load-child-routing.module';
import {
  DynamicFormGroupWithKeyFilterComponent
} from '../dom-components/dynamic-form-group-with-key-filter/dynamic-form-group-with-key-filter.component';
import {KeyFilter} from 'primeng/keyfilter';
import {
  CrudTodoFakeapiWithKeyFilterComponent
} from './crud-todo-fakeapi-with-key-filter/crud-todo-fakeapi-with-key-filter.component';
import {DynamicPopupComponent} from '../dom-components/dynamic-popup-with-p-toast/dynamic-popup.component';
import {
  DynamicPopupWithPDailogComponent
} from '../dom-components/dynamic-popup-with-p-dailog/dynamic-popup-with-p-dailog.component';
import {Dialog} from 'primeng/dialog';
import {ApplyDynamicPopupComponent} from './apply-dynamic-popup/apply-dynamic-popup.component';
import {
  DynamicPopupWithPDailogForExtendComponent
} from '../dom-components/dynamic-popup-with-p-dailog-for-extend/dynamic-popup-with-p-dailog-for-extend.component';
import {
  DynamicPopupWithPDailogAndKeyFilterComponent
} from '../dom-components/dynamic-popup-with-p-dailog-and-key-fillter/dynamic-popup-with-p-dailog-and-key-filter.component';

// working as same AppModule
@NgModule({
  declarations: [
    ApplyDynamicWithLoadChildRoutingComponent,
    DynamicFormGroupComponent,
    DataTreeTableComponent,
    CrudUserComponent,
    CrudUserWithKeyFilterComponent,
    CrudTodoFakeapiWithKeyFilterComponent,
    DynamicFormGroupWithKeyFilterComponent,
    DynamicPopupComponent,
    DynamicPopupWithPDailogComponent,
    DynamicPopupWithPDailogForExtendComponent,
    DynamicPopupWithPDailogAndKeyFilterComponent,
    ApplyDynamicPopupComponent,
  ],
  imports: [
    // All service api should import here
    // now all components on declarations : [] can work with service api
    CommonModule, // ***
    ApplyDynamicWithLoadChildRoutingRoutingModule,
    Menubar, CommonModule, TableModule, Button, Card, FloatLabel, IftaLabel,
    InputGroupAddon, InputGroup, Message, CheckboxModule, RadioButton, FormsModule,
    PickList, OrderList, TreeTableModule, Tag, Avatar, Listbox, ScrollPanelModule, Sidebar,
    ReactiveFormsModule, FloatLabelModule, InputIconModule, IconFieldModule, InputTextModule,
    CheckboxModule, ProgressSpinner, MessagesModule, InputTextarea, InputNumber, InputSwitch,
    InputMaskModule, DropdownModule, WindowMaximizeIcon, Fluid, Toast, Select, KeyFilter, Dialog
  ],

})
export class ApplyDynamicWithLoadChildRoutingModule {
  constructor() {
    console.log('ApplyDynamicWithLoadChildRoutingModule class is working')
  }
}
