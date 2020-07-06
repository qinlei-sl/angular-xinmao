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
import { WebUploaderModule, WebUploaderConfig } from 'ngx-webuploader'
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);
registerLocaleData(en);
import { from } from 'rxjs';
import { Options } from 'ts-node';
import { OrderComponent } from './client/order/order.component';
import { TableDataComponent } from './client/tableData/tableData.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      ClientComponent,
      FooterComponent,
      UploadComponent,
      OrderComponent,
      TableDataComponent
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
      NzDatePickerModule,
      NzTabsModule,
      NzButtonModule,
      NzIconModule ,
      //文件加载模块
      WebUploaderModule.forRoot(<WebUploaderConfig>{
         options: <Options>{
            swf: './assets/webuploader-0.1.5/Uploader.swf',
            server: '/fileupload'
         },
         path: './assets/webuploader-0.1.5/',
         dependentLib: './assets/jquery-3.2.1.min.js',
      })
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
