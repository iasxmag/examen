import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemFormComponent } from "../item-form/item-form.component";
import { PersonajeService } from '../../../core/services/mario.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ItemFormComponent],
  templateUrl: './mariodex-page.component.html',
  styleUrl: './mariodex-page.component.css'
})

export class MarioDexPageComponent implements OnInit {
    personaje: any[] = [];

//Lo que va a aparecer en el CRUD
personajeForm = {
    nombre: '',
    tipo: '',
    nivelPoder: ''
  };



constructor(private personajeService: PersonajeService) {}

//Lo que se ejecuta nada más carga el componente 
  ngOnInit() {
   
  }

  // Método para mostrar el formulario o cerrarlo
  mostrarModal: boolean = false;
 
  mostrarFormulario() {
    this.mostrarModal = true;
  }

  cerrarFormulario() {
    this.mostrarModal = false;
  }
}



 
  

  
  