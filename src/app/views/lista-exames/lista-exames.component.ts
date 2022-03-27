import { Component, OnInit } from '@angular/core';
import { ListaService } from 'src/app/services/lista.service';

@Component({
  selector: 'app-lista-exames',
  templateUrl: './lista-exames.component.html',
  styleUrls: ['./lista-exames.component.css']
})
export class ListaExamesComponent implements OnInit {

  listaExames: any

  constructor(
    private service: ListaService
  ) { }

  ngOnInit(): void {
    this.listaExames = this.service.getListaExames();
  }

}
