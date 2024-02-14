import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicacionCreaeditaComponent } from './ubicacion-creaedita.component';

describe('UbicacionCreaeditaComponent', () => {
  let component: UbicacionCreaeditaComponent;
  let fixture: ComponentFixture<UbicacionCreaeditaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UbicacionCreaeditaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UbicacionCreaeditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
