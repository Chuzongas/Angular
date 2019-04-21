import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FechaactualComponent } from './fechaactual/fechaactual.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { ViewmodelosComponent } from './viewmodelos/viewmodelos.component';
import { EjmetodoComponent } from './ejmetodo/ejmetodo.component';
import { EjpropertybindingComponent } from './ejpropertybinding/ejpropertybinding.component';
import { EjeventbindingComponent } from './ejeventbinding/ejeventbinding.component';
import { Ej2waybindingComponent } from './ej2waybinding/ej2waybinding.component';
import { EjemploDirectivaENNGIFComponent } from './ejemplo-directiva-enngif/ejemplo-directiva-enngif.component';
import { EjemploDirectivaNgsstyleComponent } from './ngStyle/ejemplo-directiva-ngsstyle/ejemplo-directiva-ngsstyle.component';
import { EjDirectivaNgclassComponent } from './ngClass/ej-directiva-ngclass/ej-directiva-ngclass.component';
import { EjemploDirectuvaivaEgforComponent } from './ngFor/ejemplo-directuvaiva-egfor/ejemplo-directuvaiva-egfor.component';
import { ArregloObjetosComponent } from './ngFor/arreglo-objetos/arreglo-objetos.component';
import { EjemploDirectivaNgswitchComponent } from './ngSwitch/ejemplo-directiva-ngswitch/ejemplo-directiva-ngswitch.component';
import { MenuItemDirective } from './DirectivasCustom/menu-item.directive';
import { EjemploDirectivasCustomComponent } from './DirectivasCustom/ejemplo-directivas-custom/ejemplo-directivas-custom.component';
import { PadreComponent } from './input/padre/padre.component';
import { HijoComponent } from './input/hijo/hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    FechaactualComponent,
    CopyrightComponent,
    ViewmodelosComponent,
    EjmetodoComponent,
    EjpropertybindingComponent,
    EjeventbindingComponent,
    Ej2waybindingComponent,
    EjemploDirectivaENNGIFComponent,
    EjemploDirectivaNgsstyleComponent,
    EjDirectivaNgclassComponent,
    EjemploDirectuvaivaEgforComponent,
    ArregloObjetosComponent,
    EjemploDirectivaNgswitchComponent,
    MenuItemDirective,
    EjemploDirectivasCustomComponent,
    PadreComponent,
    HijoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
