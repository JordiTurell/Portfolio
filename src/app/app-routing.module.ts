import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { LoginComponent } from './dashboard/pages/login/login.component';
import { HomeComponent as DashHomeComponent} from './dashboard/pages/home/home.component';
import { LayoutComponent } from './dashboard/pages/layout/layout.component';
import { AuthGuard } from './guards/authguard.guard';
import { ProyectosComponent as DashProyectosComponent } from './dashboard/pages/proyectos/proyectos.component';
import { HabilidadesComponent as  DashHabilidadesComponent } from './dashboard/pages/habilidades/habilidades.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path:"dashboard/login", component: LoginComponent },
  { path: "dashboard", canActivate: [AuthGuard], component: LayoutComponent, children:[
    { path: "", redirectTo: "home", pathMatch: "full" }, 
    { path: "home", component: DashHomeComponent },
    { path: "proyectos", component: DashProyectosComponent },
    { path: "habilidades", component: DashHabilidadesComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash : false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
