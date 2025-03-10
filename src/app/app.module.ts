import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {providePrimeNG} from 'primeng/config';
import {Menubar} from 'primeng/menubar';
import {CommonModule} from '@angular/common';
import Nora from '@primeng/themes/nora';
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
    LearningNgTagAndDecoratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Menubar, CommonModule, TableModule, Button, Card, FloatLabel, IftaLabel, InputGroupAddon, InputGroup, Message, CheckboxModule, RadioButton, FormsModule
  ],
  providers: [
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
