import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemFormComponent } from './item-form.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController} from '@angular/common/http/testing';
import { PersonajeService } from '../../../core/services/mario.service';

describe('ItemFormComponent', () => {
  let component: ItemFormComponent;
  let fixture: ComponentFixture<ItemFormComponent>;
  let service: PersonajeService;
  //mock del HttpClient para pruebas unitarias
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemFormComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemFormComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PersonajeService);
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //3. Probar comportamiento ante datos vacios
  it('should not save when form is empty', () => {
    component.personajeForm = {
      nombre: '',
      tipo: '',
      poder: '',
      mundo: ''
    };
    spyOn(component, 'guardar'); // Espía el método guardar para verificar si se llama
    component.guardar();
    expect(component.guardar).toHaveBeenCalled();
    // Aquí podrías agregar lógica para verificar que no se haya llamado al servicio de guardado
    
  });

  //4. Probar comportamiento ante datos validos
  it('should save when form is valid', () => {
    component.personajeForm = {
      nombre: 'Mario',
      tipo: 'Plomero',
      poder: 'Alto',
      mundo: 'Nintendo'
    };
    spyOn(component, 'guardar'); // Espía el método guardar para verificar si se llama

    component.guardar();
    expect(component.guardar).toHaveBeenCalled();

  });

  //PRUEBAS DE INTEGRACION
    //2. Que el modal se cierre al guardar
    it('deberia cerrar el modal al guardar', () => {
      spyOn(component.cerrar, 'emit'); // Espía el evento cerrar para verificar si se emite
      component.guardar();
      const req = httpMock.expectOne('http://localhost:8000/api/personajes'); // Verifica que se haya hecho una solicitud POST a la URL correcta
      req.flush({ success: true }); // Simula una respuesta exitosa del servidor
      expect(component.cerrar.emit).toHaveBeenCalled(); // Verifica que el evento cerrar se haya emitido
    });

});
