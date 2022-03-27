import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  constructor(
    private http: HttpClient,
  ) { }

  getListaSintomas() {
    return this.http.get<{ nome: String }>('http://localhost:8080/hmv/v1/sintomas')
  }

  getListaHabitos(){
    return this.http.get<{ nome: String }>('http://localhost:8080/hmv/v1/habitos')
  }

  getListaExames(){
    return this.http.get<{ nome: String }>('http://localhost:8080/hmv/v1/exames')
  }

  getPaciente(){
    return this.http.get<{ id_paciente: number, nome: String }>('http://localhost:8080/hmv/v1/paciente')
  }

  getCadastroPaciente(paciente: any){
    this.http.post('http://localhost:8080/hmv/v1/cadastro/paciente', paciente).subscribe((data) => { });
  }

  getAdicaoFuncoesVitais(funcaoVital: any) {
    this.http.post('http://localhost:8080/hmv/v1/cadastro/funcoesVitais', funcaoVital).subscribe((data) => { });
  }

  getAdicaoAnaliseClinica(analiseClinica: any) {
    this.http.post('http://localhost:8080/hmv/v1/cadastro/analiseClinica', analiseClinica).subscribe((data) => { });
  }
}
