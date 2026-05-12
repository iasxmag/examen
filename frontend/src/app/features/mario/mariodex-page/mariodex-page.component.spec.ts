import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarioDexPageComponent } from './mariodex-page.component';
//PONERLO PARA LOS TESTS 
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';


describe('MainPageComponent', () => {
  let component: MarioDexPageComponent;
  let fixture: ComponentFixture<MarioDexPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarioDexPageComponent],
      providers: [
        //PONERLO PARA LOS TESTS
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarioDexPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
