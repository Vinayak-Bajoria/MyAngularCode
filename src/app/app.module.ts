import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChildOneComponent } from './child-one/child-one.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import {DataMessageServiceService} from './services/data-message-service.service';
import { UnrelatedCompComponent } from './components/unrelated-comp/unrelated-comp.component';
import { ChildTwoComponent } from './components/child-two/child-two.component';
import { ParentTwoComponent } from './components/parent-two/parent-two.component';
import { ClientPageComponent } from './clients/client-page/client-page.component';
import { SearchFormComponent } from './search/search-form/search-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ClientFormComponent } from './clients/client-form/client-form.component';
import {AdminModuleModule} from './admin/admin-module/admin-module.module';
import {ClientModule} from './clients/client.module';
import {CommonModule} from '@angular/common';
import {CustomMaterialModule} from './custom-material.module';

@NgModule({
  declarations: [
    AppComponent,
    ChildOneComponent,
    ParentComponentComponent,
    UnrelatedCompComponent,
    ChildTwoComponent,
    ParentTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModuleModule,
    ClientModule,
    CommonModule,
    CustomMaterialModule,
  ],
  providers: [
    DataMessageServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
