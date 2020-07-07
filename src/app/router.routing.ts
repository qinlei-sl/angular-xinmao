import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ClientComponent } from './client/client.component';
import { OrderComponent } from './client/order/order.component';
import { UploadComponent } from './client/upload/upload.component';
import { DetailsComponent } from './client/details/details.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerUploadComponent } from './customer/customer-upload/customer-upload.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "client", component: UploadComponent },
  { path: "client/1", component: OrderComponent },
  { path: "client/1/details", component: DetailsComponent },

  { path: "customer", component: CustomerUploadComponent },


];

export const RouterRoutes = RouterModule.forRoot(routes);
