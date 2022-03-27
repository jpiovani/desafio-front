import { Component, OnInit } from '@angular/core';
import{ HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ListaService } from 'src/app/services/lista.service';

@Component({
  selector: 'app-lista-sintomas',
  templateUrl: './lista-sintomas.component.html',
  styleUrls: ['./lista-sintomas.component.css']
})
export class ListaSintomasComponent implements OnInit {

  listaSintomas: any

  constructor(
    private service: ListaService
  ) { }

  ngOnInit(): void {
    this.listaSintomas = this.service.getListaSintomas();
  }

}
