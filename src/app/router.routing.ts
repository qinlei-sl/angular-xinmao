import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ClientComponent } from './client/client.component';
import { OrderComponent } from './client/order/order.component';
import { UploadComponent } from './client/upload/upload.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "client", component: UploadComponent },
  { path: "client/1", component: OrderComponent }

];

export const RouterRoutes = RouterModule.forRoot(routes);
