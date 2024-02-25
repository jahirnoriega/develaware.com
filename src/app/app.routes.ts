import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { PlansComponent } from './pages/plans/plans.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';

export const routes: Routes = [
  { path: 'home', component: IndexComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'plans', component: PlansComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent },
];
