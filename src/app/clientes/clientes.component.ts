import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  displayDialog: boolean;
  cliente: Cliente = {codigo: 0, nome: '', email: '', limiteCredito: 0, situacao: ''};
  selectedCar: Cliente;
  newCliente: boolean;
  clientes: Cliente[];
  cols: any[];

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {}
}
