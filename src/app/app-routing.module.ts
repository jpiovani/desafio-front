import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdicaoAnaliseClinicaComponent } from './views/adicao-analise-clinica/adicao-analise-clinica.component';
import { AdicaoFuncoesVitaisComponent } from './views/adicao-funcoes-vitais/adicao-funcoes-vitais.component';
import { CadastroPacienteComponent } from './views/cadastro-paciente/cadastro-paciente.component';
import { ConsultaPacienteComponent } from './views/consulta-paciente/consulta-paciente.component';
import { ListaExamesComponent } from './views/lista-exames/lista-exames.component';
import { ListaHabitosComponent } from './views/lista-habitos/lista-habitos.component';
import { ListaSintomasComponent } from './views/lista-sintomas/lista-sintomas.component';
import { TopBarComponent } from './views/top-bar/top-bar.component';

const routes: Routes = [
  {
    path: "listaSintomas",
    component: ListaSintomasComponent
  },
  {
    path: "listaHabitos",
    component: ListaHabitosComponent
  },
  {
    path: "listaExames",
    component: ListaExamesComponent
  },
  {
    path: "cadastrarPaciente",
    component: CadastroPacienteComponent
  },
  {
    path: "adicaoFuncoesVitais",
    component: AdicaoFuncoesVitaisComponent
  },
  {
    path: "adicaoAnaliseClinica",
    component: AdicaoAnaliseClinicaComponent
  },
  {
    path: "consultaPaciente",
    component: ConsultaPacienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
