import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { PersonajeService } from '../../../core/services/mario.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-item-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './item-form.component.html',
  styleUrl: './item-form.component.css'
})
export class ItemFormComponent implements OnInit {

  @Output() cerrar = new EventEmitter<void>();

  personajeForm = {
    nombre: '',
    tipo: '',
    poder: '',
    mundo: ''
  };

  constructor(private personajeService: PersonajeService) {}

  ngOnInit(): void {
  }

  guardar() {
      // Crear nuevo
      this.personajeService.createPersonaje(this.personajeForm).subscribe({
        next: () => this.cerrar.emit(),
        error: (err) => console.error(err)
      });
  }

  cancelar() {
    this.cerrar.emit();
  }
} 
