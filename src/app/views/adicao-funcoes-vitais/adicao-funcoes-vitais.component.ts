import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ListaService } from 'src/app/services/lista.service';

@Component({
  selector: 'app-adicao-funcoes-vitais',
  templateUrl: './adicao-funcoes-vitais.component.html',
  styleUrls: ['./adicao-funcoes-vitais.component.css']
})
export class AdicaoFuncoesVitaisComponent implements OnInit {

  pacientes: any
  paciente: any[] = [];

  funcaoVital = this.formBuilder.group({
    temperatura:"",
    pressaoArterial:"",
    batimentosCardiacos:"",
    pacientes: "",
  })

  constructor(
    private formBuilder: FormBuilder,
    private service: ListaService
  ) { }

  ngOnInit(): void {
    this.pacientes = this.service.getPaciente();
  }

  onSubmit(){
    this.service.getAdicaoFuncoesVitais(this.funcaoVital.value)
    window.alert("Funções Vitais adicionadas com sucesso!!! ");
    console.log("TESTE" + this.funcaoVital.value);

    this.funcaoVital = this.formBuilder.group({
      temperatura: "",
      pressaoArterial: "",
      batimentosCardiacos: "",
      pacientes:"",
    })
  }

}
