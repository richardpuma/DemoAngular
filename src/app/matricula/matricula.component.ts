import { Component,OnInit } from '@angular/core';

@Component({
	selector: 'matricula-tag',
	templateUrl: './matricula.component.html'
  })

  export class MatriculaComponent implements OnInit {
	private Titulo : string = "Formulario Matricula";
	private Nombre : string;
	private Apellido : string;
 
	constructor(public nombre: string,public apellido:string){
		this.Nombre=nombre;
		this.Apellido=apellido;
	}

	ngOnInit() {
		
	}

  }
