import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { ClientComponent } from './client.component';
import { FooterComponent } from './footer/footer.component';
import { ClientRouterRoutes } from './clientRouter.routing';
import { UploadComponent } from './upload/upload.component';
import { OrderComponent } from './order/order.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

import zh from '@angular/common/locales/zh';
import { TableDataComponent } from './tableData/tableData.component';
registerLocaleData(zh);


@NgModule({
  imports: [
    CommonModule,
    ClientRouterRoutes,
    NzTabsModule,
    NzDatePickerModule

    
  ],
  declarations: [
    ClientComponent,
    FooterComponent,
    UploadComponent,
    OrderComponent,
    TableDataComponent
  ]
})
export class ClientModule { }
