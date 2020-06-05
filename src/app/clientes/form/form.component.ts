import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClientesService } from 'src/app/core/clientes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public cliente: Cliente = new Cliente();

  constructor(
    private clienteService: ClientesService,
    // Este nos permite reirigirnos a una pagina que deseemos
    private routes: Router,
    // Nos permite analizar la urls
    private activatedRouter: ActivatedRoute 
    ) { }

  ngOnInit(): void {
    // Leera la ruta que sera generada dese clientes.component
    // y automaticamente cargara este metodo trayendo la informacion necesaria
    this.getClientId();
  }

  createClient(): void{
    this.clienteService.createClient(this.cliente)
    .subscribe(
      response => {
        console.log(this.cliente)
        this.routes.navigate(['/clientes'])
      }
    )
  }

  getClientId(): void{
    this.activatedRouter.params
    .subscribe(
      urlparam => {
        let id = urlparam['id'];
        
        if (id) {
          this.clienteService.getClient(id)
          .subscribe(
            dato => {
              this.cliente = dato
            }
          )  
        }
      }
    )
  }

  updateClient(): void{
    this.clienteService.updateClient(this.cliente)
    .subscribe(
      response => {
        this.routes.navigate(['/clientes']);
        console.log(this.cliente)
      }
    )
  }

}
