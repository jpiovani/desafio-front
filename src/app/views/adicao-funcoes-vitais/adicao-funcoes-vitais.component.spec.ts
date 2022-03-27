import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicaoFuncoesVitaisComponent } from './adicao-funcoes-vitais.component';

describe('AdicaoFuncoesVitaisComponent', () => {
  let component: AdicaoFuncoesVitaisComponent;
  let fixture: ComponentFixture<AdicaoFuncoesVitaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicaoFuncoesVitaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicaoFuncoesVitaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
