import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfesionalesComponent } from './pages/profesionales/profesionales.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profesionales', component: ProfesionalesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
