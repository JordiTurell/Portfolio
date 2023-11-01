import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './dashboard/pages/login/login.component';
import { LayoutComponent } from './dashboard/pages/layout/layout.component';
import { AuthGuard } from './guards/authguard.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path:"dashboard/login", component: LoginComponent },
  { path: "dashboard", canActivate: [AuthGuard], component: LayoutComponent, children:[
    
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash : false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
