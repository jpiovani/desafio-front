import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ListaService } from 'src/app/services/lista.service';

@Component({
  selector: 'app-consulta-paciente',
  templateUrl: './consulta-paciente.component.html',
  styleUrls: ['./consulta-paciente.component.css']
})
export class ConsultaPacienteComponent implements OnInit {

  listaPaciente: any

  gerarPDF = this.formBuilder.group({
    listaPaciente: ""
  })

  constructor(
    private formBuilder: FormBuilder,
    private service: ListaService
  ) {}

  ngOnInit(): void {
    this.listaPaciente = this.service.getPaciente();
  }

  onSubmit() {
     window.alert("Não desenvolvido ainda!!!");
  }
}
