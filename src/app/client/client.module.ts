import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { FooterComponent } from './footer/footer.component';
import { ClientRouterRoutes } from './clientRouter.routing';
import { UploadComponent } from './upload/upload.component';

@NgModule({
  imports: [
    CommonModule,
    ClientRouterRoutes
  ],
  declarations: [
    ClientComponent,
    FooterComponent,
    UploadComponent
  ]
})
export class ClientModule { }
