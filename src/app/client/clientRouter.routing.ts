import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: "client/1/datails", component: DetailsComponent
  },
];

export const ClientRouterRoutes = RouterModule.forChild(routes);
