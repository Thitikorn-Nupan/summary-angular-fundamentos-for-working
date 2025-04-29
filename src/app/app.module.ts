import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {providePrimeNG} from 'primeng/config';
import {Menubar} from 'primeng/menubar';
import {CommonModule} from '@angular/common';
import Aura from '@primeng/themes/aura';
import { LearningNgTagComponent } from './components/learning-ng-tag/learning-ng-tag.component';
import { TemplateAComponent } from './components/learning-ng-tag/template-a/template-a.component';
import { TemplateBComponent } from './components/learning-ng-tag/template-b/template-b.component';
import {TableModule} from 'primeng/table';
import {Button} from 'primeng/button';
import {Card} from 'primeng/card';
import {FloatLabel} from 'primeng/floatlabel';
import {IftaLabel} from 'primeng/iftalabel';
import { TemplateCComponent } from './components/learning-ng-tag/template-c/template-c.component';
import {InputGroupAddon} from 'primeng/inputgroupaddon';
import {InputGroup} from 'primeng/inputgroup';
import {Message} from 'primeng/message';
import { TemplateDComponent } from './components/learning-ng-tag/template-d/template-d.component';
import { TemplateEComponent } from './components/learning-ng-tag/template-e/template-e.component';
import {RadioButton} from 'primeng/radiobutton';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LearningNgTagAndDecoratorComponent } from './components/learning-ng-tag-and-decorator/learning-ng-tag-and-decorator.component';
import {HttpClientModule, provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {TemplateA2Component} from './components/learning-ng-tag-and-decorator/template-a2/template-a2.component';
import { TemplateB2Component } from './components/learning-ng-tag-and-decorator/template-b2/template-b2.component';
import { LearningNgContainerTagComponent } from './components/learning-ng-container-tag/learning-ng-container-tag.component';
import {PickList} from 'primeng/picklist';
import {OrderList} from 'primeng/orderlist';
import {TreeTableModule} from 'primeng/treetable';
import {Tag} from 'primeng/tag';
import { LearningViewChildComponent } from './components/learning-view-child/learning-view-child.component';
import { LearningNgContentComponent } from './components/learning-ng-content/learning-ng-content.component';
import { TemplateA3Component } from './components/learning-ng-content/template-a3/template-a3.component';
import { TemplateB3Component } from './components/learning-ng-content/template-b3/template-b3.component';
import { TemplateA4Component } from './components/learning-view-child/template-a4/template-a4.component';
import { TemplateB4Component } from './components/learning-view-child/template-b4/template-b4.component';
import { LearningNgContainerAndPTreeTableComponent } from './components/learning-ng-container-and-p-tree-table/learning-ng-container-and-p-tree-table.component';
import { DataTableComponent } from './components/learning-ng-container-and-p-tree-table/data-table/data-table.component';
import {Avatar} from 'primeng/avatar';
import { DataListComponent } from './components/learning-ng-container-and-p-tree-table/data-list/data-list.component';
import {Listbox} from 'primeng/listbox';
import { CardComponent } from './components/learning-view-child/card/card.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { LearningFormGroupsComponent } from './components/learning-form-groups/learning-form-groups.component';
import {Sidebar} from 'primeng/sidebar';
import { FormAComponent } from './components/learning-form-groups/form-a/form-a.component';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormBComponent } from './components/learning-form-groups/form-b/form-b.component';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ProgessSpinnerComponent } from './components/learning-view-child/progess-spinner/progess-spinner.component';
import {ProgressSpinner} from 'primeng/progressspinner';
import {MessagesModule} from 'primeng/messages';
import {InputTextarea} from 'primeng/inputtextarea';
import {InputNumber} from 'primeng/inputnumber';
import {InputSwitch} from 'primeng/inputswitch';
import { InputMaskModule } from 'primeng/inputmask';
import {DropdownModule} from 'primeng/dropdown';
import { FormCComponent } from './components/learning-form-groups/form-c/form-c.component';
import {WindowMaximizeIcon} from "primeng/icons";
import { LearningFormGroupsAndBindingAttributesComponent } from './components/learning-form-groups-and-binding-attributes/learning-form-groups-and-binding-attributes.component';
import { FormA2Component } from './components/learning-form-groups-and-binding-attributes/form-a2/form-a2.component';
import { FormB2Component } from './components/learning-form-groups-and-binding-attributes/form-b2/form-b2.component';
import { FormC2Component } from './components/learning-form-groups-and-binding-attributes/form-c2/form-c2.component';
import {Fluid} from 'primeng/fluid';
import {Toast} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import { LearningFormGroupsAndBindingAttributesAndNgTagComponent } from './components/learning-form-groups-and-binding-attributes-and-ng-tag/learning-form-groups-and-binding-attributes-and-ng-tag.component';
import { DataTableAComponent } from './components/learning-form-groups-and-binding-attributes-and-ng-tag/data-table-a/data-table-a.component';
import { DataFormComponent } from './components/learning-form-groups-and-binding-attributes-and-ng-tag/data-form/data-form.component';
import { DataFormDynamicFieldComponent } from './components/learning-form-groups-and-binding-attributes-and-ng-tag/data-form-dynamic-field/data-form-dynamic-field.component';
import { MainComponent } from './components/learning-child-routing/main/main.component';
import {SubMainAComponent} from './components/learning-child-routing/main/sub-main-a/sub-main-a.component';
import {SubMainBComponent} from './components/learning-child-routing/main/sub-main-b/sub-main-b.component';
import {SubMainCComponent} from './components/learning-child-routing/main/sub-main-c/sub-main-c.component';
import { SubMainC2Component } from './components/learning-load-child-routing/sub-main-c2/sub-main-c2.component';
import { TestRobotTableComponent } from './components/learning-load-child-routing/test-robot-table/test-robot-table.component';
import {
    LearningLoadChildRoutingModule
} from "./components/learning-load-child-routing/learning-load-child-routing.module";
import { CrudUserComponent } from './components/learning-apply-dynamic-with-load-child-rounting/crud-user/crud-user.component';
import { DynamicFormGroupWithKeyFilterComponent } from './components/dom-components/dynamic-form-group-with-key-filter/dynamic-form-group-with-key-filter.component';
import { TestUserFormWithKeyFilterComponent } from './components/learning-load-child-routing/test-user-form-with-key-filter/test-user-form-with-key-filter.component';
import { CrudUserWithKeyFilterComponent } from './components/learning-apply-dynamic-with-load-child-rounting/crud-user-with-key-filter/crud-user-with-key-filter.component';
import { CrudTodoFakeapiWithKeyFilterComponent } from './components/learning-apply-dynamic-with-load-child-rounting/crud-todo-fakeapi-with-key-filter/crud-todo-fakeapi-with-key-filter.component';
import { DynamicPopupComponent } from './components/dom-components/dynamic-popup-with-p-toast/dynamic-popup.component';
import { DynamicPopupWithPDailogComponent } from './components/dom-components/dynamic-popup-with-p-dailog/dynamic-popup-with-p-dailog.component';
import { LearningEnvTsWithApiComponent } from './components/learning-env-ts-with-api/learning-env-ts-with-api.component';
import {Tree} from 'primeng/tree';
import { ApplyDynamicPopupComponent } from './components/learning-apply-dynamic-with-load-child-rounting/apply-dynamic-popup/apply-dynamic-popup.component';
import { LoginComponent } from './components/login/login.component';
import {KeyFilter} from 'primeng/keyfilter';
import {Password} from 'primeng/password';
// import { DataTreeTableComponent } from './components/learning-form-groups-and-binding-attributes-and-ng-tag/data-tree-table/data-tree-table.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,

    LearningNgTagComponent,
    TemplateAComponent,
    TemplateBComponent,
    TemplateCComponent,
    TemplateDComponent,
    TemplateEComponent,
    TemplateA2Component,
    LearningNgTagAndDecoratorComponent,
    TemplateB2Component,
    LearningNgContainerTagComponent,
    LearningViewChildComponent,
    LearningNgContentComponent,
    TemplateA3Component,
    TemplateB3Component,
    TemplateA4Component,
    TemplateB4Component,
    LearningNgContainerAndPTreeTableComponent,
    DataTableComponent,
    DataListComponent,
    CardComponent,
    LearningFormGroupsComponent,
    FormAComponent,
    FormBComponent,
    ProgessSpinnerComponent,
    FormCComponent,
    LearningFormGroupsAndBindingAttributesComponent,
    FormA2Component,
    FormB2Component,
    FormC2Component,
    LearningFormGroupsAndBindingAttributesAndNgTagComponent,
    DataTableAComponent,
    DataFormComponent,
    DataFormDynamicFieldComponent,
    // *** Remember all components that want to use primeng on imports : [...]
    // *** you have to put component classes on declarations : [...]
    MainComponent,
    SubMainAComponent,
    SubMainBComponent,
    SubMainCComponent,
    SubMainC2Component,
    LearningEnvTsWithApiComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Menubar, CommonModule, TableModule, Button, Card, FloatLabel, IftaLabel,
    InputGroupAddon, InputGroup, Message, CheckboxModule, RadioButton, FormsModule,
    PickList, OrderList, TreeTableModule, Tag, Avatar, Listbox, ScrollPanelModule, Sidebar,
    ReactiveFormsModule, FloatLabelModule, InputIconModule, IconFieldModule, InputTextModule,
    CheckboxModule, ProgressSpinner, MessagesModule, InputTextarea, InputNumber, InputSwitch,
    InputMaskModule, DropdownModule, WindowMaximizeIcon, Fluid, Toast, Tree, KeyFilter, Password,
  ],
  providers: [
    // for http client
    provideHttpClient(withInterceptorsFromDi()),
    // set primeng
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }),
    //
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
