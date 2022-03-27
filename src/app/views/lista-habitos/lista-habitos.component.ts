import { Component, OnInit } from '@angular/core';
import { ListaService } from 'src/app/services/lista.service';

@Component({
  selector: 'app-lista-habitos',
  templateUrl: './lista-habitos.component.html',
  styleUrls: ['./lista-habitos.component.css']
})
export class ListaHabitosComponent implements OnInit {

  listaHabitos: any

  constructor(
    private service: ListaService
  ) { }

  ngOnInit(): void {
    this.listaHabitos = this.service.getListaHabitos();
  }

}
