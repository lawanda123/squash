import { Routes } from '@angular/router';
import { ClubsComponent } from './components/clubs';
import { RegisterComponent } from './components/sign-in';
import { SignInComponent } from './components/sign-in';

export const appRoutes : Routes = [
  { path: 'catalog', component: ClubsComponent, },
  { path: 'users/register', component: RegisterComponent, },
  { path: 'users/sign-in', component: SignInComponent, },
];
