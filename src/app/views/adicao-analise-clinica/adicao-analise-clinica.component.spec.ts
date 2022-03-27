import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicaoAnaliseClinicaComponent } from './adicao-analise-clinica.component';

describe('AdicaoAnaliseClinicaComponent', () => {
  let component: AdicaoAnaliseClinicaComponent;
  let fixture: ComponentFixture<AdicaoAnaliseClinicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicaoAnaliseClinicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicaoAnaliseClinicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
