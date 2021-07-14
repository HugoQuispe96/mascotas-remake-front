import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnunciosRoutingModule } from './anuncios-routing.module';
import { MascotaPerdidasGatosComponent } from './components/mascota-perdidas-gatos/mascota-perdidas-gatos.component';
import { MascotaPerdidasPerrosComponent } from './components/mascota-perdidas-perros/mascota-perdidas-perros.component';
import { MascotaPerdidasOtrosComponent } from './components/mascota-perdidas-otros/mascota-perdidas-otros.component';
import { MascotaEncontradasGatosComponent } from './components/mascota-encontradas-gatos/mascota-encontradas-gatos.component';
import { MascotaEncontradasPerrosComponent } from './components/mascota-encontradas-perros/mascota-encontradas-perros.component';
import { MascotaEncontradasOtrosComponent } from './components/mascota-encontradas-otros/mascota-encontradas-otros.component';
import { PublicarAnuncioComponent } from './components/publicar-anuncio/publicar-anuncio.component';
import { GestionarAnuncioComponent } from './components/gestionar-anuncio/gestionar-anuncio.component';


@NgModule({
  declarations: [
    MascotaPerdidasGatosComponent,
    MascotaPerdidasPerrosComponent,
    MascotaPerdidasOtrosComponent,
    MascotaEncontradasGatosComponent,
    MascotaEncontradasPerrosComponent,
    MascotaEncontradasOtrosComponent,
    PublicarAnuncioComponent,
    GestionarAnuncioComponent
  ],
  imports: [
    CommonModule,
    AnunciosRoutingModule
  ]
})
export class AnunciosModule { }
