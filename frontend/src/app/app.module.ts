import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routingModule } from './routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { ContactUpdateComponent } from './contact-update/contact-update.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';

import { MatToolbarModule, MatButtonModule, MatFormField, MatFormFieldModule, MatInputModule, MatTableModule, MatDialogModule } from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { JwtModule } from '@auth0/angular-jwt';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactCreateComponent,
    ContactUpdateComponent,
    ContactDetailComponent,
    LoginComponent
  ],
  imports: [BrowserModule,
    routingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCardModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function tokenGetter() {
          return localStorage.getItem('access_token');
        },
        whitelistedDomains: ['localhost: 3000'],
        blacklistedRoutes: ['http://localhost:3000/auth/login']
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
