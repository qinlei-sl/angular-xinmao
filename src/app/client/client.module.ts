import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { FooterComponent } from './footer/footer.component';
import { ClientRouterRoutes } from './clientRouter.routing';
import { UploadComponent } from './upload/upload.component';
import { OrderComponent } from './order/order.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

@NgModule({
  imports: [
    CommonModule,
    ClientRouterRoutes,
    NzTabsModule,

    
  ],
  declarations: [
    ClientComponent,
    FooterComponent,
    UploadComponent,
    OrderComponent
  ]
})
export class ClientModule { }
