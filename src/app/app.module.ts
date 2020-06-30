import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { RouterRoutes } from './router.routing';
import { ClientComponent } from './client/client.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { AngularFileUploaderModule } from 'angular-file-uploader'
import { FooterComponent } from './client/footer/footer.component';
import { UploadComponent } from './client/upload/upload.component';


registerLocaleData(en);

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      ClientComponent,
      FooterComponent,
      UploadComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      BrowserAnimationsModule,
      RouterModule,
      RouterRoutes,
      ReactiveFormsModule,
      HttpClientJsonpModule,
      HttpClientModule,
      NzGridModule,
      AngularFileUploaderModule,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
