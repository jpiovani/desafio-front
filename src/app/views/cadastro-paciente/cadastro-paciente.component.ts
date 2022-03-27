import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ListaService } from 'src/app/services/lista.service';

@Component({
  selector: 'app-cadastro-paciente',
  templateUrl: './cadastro-paciente.component.html',
  styleUrls: ['./cadastro-paciente.component.css']
})
export class CadastroPacienteComponent implements OnInit {

  paciente = this.formBuilder.group({
    nome: "",
    cpf: 0,
    convenio: "",
    cep: "",
    endereco: "",
    numero: 0,
    bairro: "",
    ddd: 0,
    celular: 0,
  })

  constructor(
    private formBuilder: FormBuilder,
    private service: ListaService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.getCadastroPaciente(this.paciente.value)
    window.alert("Paciente cadastrado com sucesso!!! ");
    console.log(this.paciente.value);
    
    this.paciente = this.formBuilder.group({
      nome: "",
      cpf: 0,
      convenio: "",
      cep: "",
      endereco: "",
      numero: 0,
      bairro: "",
      ddd: 0,
      celular: 0,
    })
  }

}
