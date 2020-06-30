import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ClientComponent } from './client/client.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "", component: ClientComponent },
];

export const RouterRoutes = RouterModule.forRoot(routes);
