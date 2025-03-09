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
import { LearningNgTagComponent } from './components/learning-ng-tag/learning-ng-tag.component';
import { TemplateAComponent } from './components/learning-ng-tag/template-a/template-a.component';
import { TemplateBComponent } from './components/learning-ng-tag/template-b/template-b.component';
import {TableModule} from 'primeng/table';
import {Button} from 'primeng/button';
import {Card} from 'primeng/card';
import {FloatLabel} from 'primeng/floatlabel';
import {IftaLabel} from 'primeng/iftalabel';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LearningNgTagComponent,
    TemplateAComponent,
    TemplateBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Menubar, CommonModule, TableModule, Button, Card, FloatLabel, IftaLabel
  ],
  providers: [
    // set primeng
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Nora,
      },

    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
