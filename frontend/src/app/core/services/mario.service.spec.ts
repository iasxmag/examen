//para que no me salga en rojo 
/// <reference types="jasmine" /> 
import { TestBed } from '@angular/core/testing';
import { PersonajeService } from './mario.service';
// IMPORTS IMPORTANTE PARA PRUEBAS UNITARIAS
import { provideHttpClient } from '@angular/common/http'; 
import { provideRouter } from '@angular/router'; 
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';

describe('PersonajeService', () => {
  // Variables para el servicio y el mock del HttpClient
  let service: PersonajeService;
  //mock del HttpClient para pruebas unitarias
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        PersonajeService,
        provideRouter([]),
        provideHttpClient(),        // Configura el cliente HTTP
        provideHttpClientTesting(), // Configura el interceptor para pruebas (el mock)
      ],
    });
    service = TestBed.inject(PersonajeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  // --PRUEBAS UNITARIAS--
  //1. Verificar que el servicio se crea correctamente
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //2. Verifica que se crea un nuevo personaje correctamente
  it('should create a new personaje', () => {
    const mockDatos = { nombre: 'Mario', tipo: 'Bueno', poder: 30, mundo: 'Nintendo' };
    
    // Llamar al método createPersonaje y verificar que se hace una solicitud POST
    service.createPersonaje(mockDatos).subscribe(res => {
      expect(res).toBeTruthy();
    });

    // Verificar que se hizo una solicitud POST a la URL correcta
    const req = httpMock.expectOne('http://localhost:8000/api/personajes');
    expect(req.request.method).toBe('POST');
    req.flush({ success: true });
  });


  it('deberia dar error si no pongo el nombre', () => {
    const mockDatos = { nombre: '', tipo: 'Bueno', poder: 30, mundo: 'Nintendo' };
    service.createPersonaje(mockDatos).subscribe({
      next: () => fail('Debería haber fallado la creación del personaje'),
      error: (err) => expect(err).toBeTruthy()
    });

    const req = httpMock.expectOne('http://localhost:8000/api/personajes');
    expect(req.request.method).toBe('POST');
    req.flush({ success: false }, { status: 400, statusText: 'Bad Request' });
  });

  //PRUEBAS DE INTEGRACION
  //1. comprobar que el servicio recibe los datos correctamente
  it('debe obtener personjes (GET)', () => {
    const mockPersonajes = [{nombre: 'Mario', tipo: 'Bueno', poder: 30, mundo: 'Nintendo' }];

    service.getPersonajes().subscribe(personajes => {
      expect(personajes.length).toBe(1);
      expect(personajes).toEqual(mockPersonajes);
    });

    //verificar la llamada a la URL
    const req = httpMock.expectOne('http://localhost:8000/api/personajes');
    expect(req.request.method).toBe('GET');
    //responde con datos simulados
    req.flush(mockPersonajes);
  });

  afterEach(() => {
    httpMock.verify(); // Para que no queden peticiones colgadas
  });

});
