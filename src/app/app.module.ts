import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//#region Front
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './pages/home/home.component';
import { HeadComponent } from './components/head/head.component';
import { RedesComponent } from './general-component/redes/redes.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { SobremiHomeComponent } from './components/sobremi-home/sobremi-home.component';
//#end region front

//#region dashboard
import { LoginComponent } from './dashboard/pages/login/login.component';
import { SobremiComponent as DashSobremiComponent } from './dashboard/pages/sobremi/sobremi.component';
import { LayoutComponent } from './dashboard/pages/layout/layout.component';
import { ProyectosComponent as DashProyectosComponent } from './dashboard/pages/proyectos/proyectos.component';
import { HabilidadesComponent as DashHabilidadesComponent} from './dashboard/pages/habilidades/habilidades.component';
import { ToolbarComponent } from './dashboard/general-component/toolbar/toolbar.component';
import { FormsSobremiComponent } from './dashboard/forms/forms-sobremi/forms-sobremi.component';
import { SaveButtonComponent } from './dashboard/general-component/inputs/buttons/save-button/save-button.component';
import { ModalerrorComponent } from './dashboard/modals/modalerror/modalerror.component';
import { ModalloginComponent } from './dashboard/modals/modallogin/modallogin.component';
import { FormsLoginComponent } from './dashboard/forms/forms-login/forms-login.component';
import { SkillFormPageComponent } from './dashboard/pages/skill-form-page/skill-form-page.component';
import { FormSkillComponent } from './dashboard/forms/form-skill/form-skill.component';
//#endregion dashboard


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProyectosHomeComponent } from './components/proyectos-home/proyectos-home.component';
import { FormProjectComponent } from './dashboard/forms/form-project/form-project.component';
import { ProjectFormPageComponent } from './dashboard/pages/project-form-page/project-form-page.component';
import { SelectMultipleComponent } from './dashboard/general-component/select-multiple/select-multiple.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    HeadComponent,
    RedesComponent,
    ExperienciaComponent,
    LoginComponent,
    LayoutComponent,
    DashProyectosComponent,
    DashHabilidadesComponent,
    ToolbarComponent,
    ModalloginComponent,
    FormsLoginComponent,
    SaveButtonComponent,
    ModalerrorComponent,
    ContactoComponent,
    FormsSobremiComponent,
    DashSobremiComponent,
    SobremiHomeComponent,
    SkillFormPageComponent,
    FormSkillComponent,
    ProyectosHomeComponent,
    FormProjectComponent,
    ProjectFormPageComponent,
    SelectMultipleComponent
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
