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
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButton} from 'primeng/radiobutton';
import {FormsModule} from '@angular/forms';
import { LearningNgTagAndDecoratorComponent } from './components/learning-ng-tag-and-decorator/learning-ng-tag-and-decorator.component';
import {HttpClientModule, provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {TemplateA2Component} from './components/learning-ng-tag-and-decorator/template-a2/template-a2.component';
import { TemplateB2Component } from './components/learning-ng-tag-and-decorator/template-b2/template-b2.component';
import { LearningNgContainerTagComponent } from './components/learning-ng-container-tag/learning-ng-container-tag.component';
import {PickList} from 'primeng/picklist';
import {OrderList} from 'primeng/orderlist';
import {TreeTableModule} from 'primeng/treetable';
import {Tag} from 'primeng/tag';

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
    LearningNgContainerTagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Menubar, CommonModule, TableModule, Button, Card, FloatLabel, IftaLabel, InputGroupAddon, InputGroup, Message, CheckboxModule, RadioButton, FormsModule, PickList, OrderList, TreeTableModule, Tag,
    // HttpClientModule
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

    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
