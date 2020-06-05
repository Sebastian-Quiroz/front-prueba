import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';
import { ClientesService } from '../core/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  
  public clientes: Cliente[];

  constructor(private clienteService: ClientesService) { }

  ngOnInit(): void {
    this.clienteService.getClients().subscribe(
      datos => this.clientes = datos
    );
  }

  deleteCliente(cliente: Cliente): void{
    this.clienteService.deleteClient(cliente.id)
    .subscribe(
      resporse => {
        this.clientes = this.clientes.filter(
          cli => cli !== cliente
        )
      }
    );
  }
}
