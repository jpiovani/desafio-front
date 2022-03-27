import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaSintomasComponent } from './views/lista-sintomas/lista-sintomas.component';
import { ListaExamesComponent } from './views/lista-exames/lista-exames.component';
import { ListaHabitosComponent } from './views/lista-habitos/lista-habitos.component';
import { TopBarComponent } from './views/top-bar/top-bar.component';
import { CadastroPacienteComponent } from './views/cadastro-paciente/cadastro-paciente.component';
import { AdicaoFuncoesVitaisComponent } from './views/adicao-funcoes-vitais/adicao-funcoes-vitais.component';
import { AdicaoAnaliseClinicaComponent } from './views/adicao-analise-clinica/adicao-analise-clinica.component';
import { ConsultaPacienteComponent } from './views/consulta-paciente/consulta-paciente.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaSintomasComponent,
    ListaExamesComponent,
    ListaHabitosComponent,
    TopBarComponent,
    CadastroPacienteComponent,
    AdicaoFuncoesVitaisComponent,
    AdicaoAnaliseClinicaComponent,
    ConsultaPacienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
