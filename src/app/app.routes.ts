import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ShowsComponent } from './components/shows/shows.component';
import { TheatersComponent } from './components/theaters/theaters.component';
import { SeatSelectionComponent } from './components/seat-selection/seat-selection.component';
import { OrganizerDashboardComponent } from './components/organizer-dashboard/organizer-dashboard.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'shows', component: ShowsComponent },
  { path: 'theaters/:id', component: TheatersComponent },
  { path: 'seats/:id', component: SeatSelectionComponent },
  { path: 'organizer-dashboard', component: OrganizerDashboardComponent }
];