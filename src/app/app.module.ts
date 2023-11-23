import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './pages/home/home.component';
import { HeadComponent } from './components/head/head.component';
import { RedesComponent } from './general-component/redes/redes.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { LoginComponent } from './dashboard/pages/login/login.component';
import { LayoutComponent } from './dashboard/pages/layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProyectosComponent } from './dashboard/pages/proyectos/proyectos.component';
import { HabilidadesComponent } from './dashboard/pages/habilidades/habilidades.component';
import { ToolbarComponent } from './dashboard/general-component/toolbar/toolbar.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalloginComponent } from './dashboard/modals/modallogin/modallogin.component';
import { FormsLoginComponent } from './dashboard/forms/forms-login/forms-login.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SaveButtonComponent } from './dashboard/general-component/inputs/buttons/save-button/save-button.component';
import { ModalerrorComponent } from './dashboard/modals/modalerror/modalerror.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    HeadComponent,
    RedesComponent,
    SobremiComponent,
    ExperienciaComponent,
    LoginComponent,
    LayoutComponent,
    ProyectosComponent,
    HabilidadesComponent,
    ToolbarComponent,
    ModalloginComponent,
    FormsLoginComponent,
    SaveButtonComponent,
    ModalerrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
