import { provideRouter, RouterConfig } from '@angular/router';
import { PersonComponent }          from './person.component';
import { PersonDetailComponent }          from './person-detail.component';

// Route Configuration
export const PersonRoutes: RouterConfig = [
  { path: 'person', component: PersonComponent },
  { path: 'detail/:id', component: PersonDetailComponent }
];