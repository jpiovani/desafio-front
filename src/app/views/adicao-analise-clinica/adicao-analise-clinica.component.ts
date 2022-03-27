import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ListaService } from 'src/app/services/lista.service';

@Component({
  selector: 'app-adicao-analise-clinica',
  templateUrl: './adicao-analise-clinica.component.html',
  styleUrls: ['./adicao-analise-clinica.component.css']
})
export class AdicaoAnaliseClinicaComponent implements OnInit {

  sintomas: any
  habitos: any
  exames: any
  pacientes: any
  sintoma: any[] = [];
  habito: any[] = [];
  exame: any[] = [];
  paciente: any[] = [];

  analiseClinica = this.formBuilder.group({
    pacientes: "",
    dataAnalise:"",
    sintomas: "",
    habitos: "",
    exames: "",
  })


  constructor(
    private formBuilder: FormBuilder,
    private service: ListaService
  ) { }

  ngOnInit(): void {
    this.sintomas = this.service.getListaSintomas();
    this.habitos = this.service.getListaHabitos();
    this.exames = this.service.getListaExames();
    this.pacientes = this.service.getPaciente();
  }

  onSubmit(){
    this.service.getAdicaoAnaliseClinica(this.analiseClinica.value)
    window.alert("Análise Clinica adicionada com sucesso!!! ");
    console.log(this.analiseClinica.value);

    this.analiseClinica = this.formBuilder.group({
      pacientes: "",
      dataAnalise: "",
      sintomas: "",
      habitos: "",
      exames: "",
    })
  }

}
