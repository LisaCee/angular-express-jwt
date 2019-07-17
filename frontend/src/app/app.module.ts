import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { ContactUpdateComponent } from './contact-update/contact-update.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import {routingModule} from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactCreateComponent,
    ContactUpdateComponent,
    ContactDetailComponent
  ],
  imports: [
    BrowserModule,
    routingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }